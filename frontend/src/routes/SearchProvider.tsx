import Search from '../components/provider/Search';
import { useState, useEffect } from "react";
import ProviderList from "../components/provider/ProviderList";
import { useNavigate } from "react-router-dom";
import { useProviderAllDetail, useProviderDetail, ProviderDetail } from "../components/provider/useProviderDetail";
import Pagination from '../components/common/Pagination';

const SearchProvider = () => {
    const providerList = useProviderAllDetail();

    const [searchTerm, setSearchTerm] = useState("");
    const providerDetail: ProviderDetail | null = useProviderDetail(searchTerm);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm) {
            if (providerDetail) {
                navigate(`/providerresult/${providerDetail.serviceName}`, {
                    state: { providerDetail }
                });
            } else {
                navigate('/noresult', { state: { searchTerm } });
            }
        }
    }, [searchTerm, providerDetail, navigate]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProviders = providerList.slice(startIndex, startIndex + itemsPerPage);

    const handleSearch = (term: string) => {
        console.log("검색어:", term);
        setSearchTerm(term);
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">거래소 검색</h1>
            <Search onSearch={handleSearch} />
            <ProviderList providerList={currentProviders} />
            <Pagination
                currentPage={currentPage}
                totalItems={providerList.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default SearchProvider;
