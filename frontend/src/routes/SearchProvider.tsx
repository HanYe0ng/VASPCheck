import Search from '../components/provider/Search';
import { useState } from "react";
import ProviderList from "../components/provider/ProviderList";
import { useNavigate } from "react-router-dom";
import { useProviderAllDetail, ProviderDetail } from "../components/provider/useProviderDetail";
import Pagination from '../components/common/Pagination';
import { getProviderDetail } from "../components/provider/providerApi";

const SearchProvider = () => {
    const providerList = useProviderAllDetail();

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const navigate = useNavigate();

    const handleSearch = async (term: string) => {
        console.log("검색어:", term);
        setSearchTerm(term);

        const providerDetail: ProviderDetail | null = await getProviderDetail(term);

        if (providerDetail && providerDetail.serviceName !== undefined) {
            navigate(`/providerresult/${providerDetail.serviceName}`, {
                state: { providerDetail }
            });
        } else {
            navigate('/noresult', {
                state: { searchTerm: term }
            });
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProviders = providerList.slice(startIndex, startIndex + itemsPerPage);

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
