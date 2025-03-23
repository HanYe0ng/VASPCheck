import Search from '../components/provider/Search';
import { useState } from "react";
import ProviderList from "../components/provider/ProviderList";
import { useNavigate } from "react-router-dom";
import { useProviderDetail, Provider } from "../components/provider/useProviderDetail";
import Pagination from '../components/common/Pagination';

const SearchProvider = () => {
    const { provider, businessTypes, relations } = useProviderDetail();
    const [searchResult, setSearchResult] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const navigate = useNavigate();

    const handleSearch = (term: string) => {
        console.log("검색어:", term);
        setSearchResult(term);

        const matchProvider = provider.filter((p: Provider) => p.serviceName === term);

        if (matchProvider.length > 0) {
            const matched = matchProvider[0];
            navigate(`/providerresult/${matched.id}`, {
                state: { provider: matched, businessTypes, relations }
            });
        } else {
            navigate('/noresult', { state: { searchTerm: term } });
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProviders = provider.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">거래소 검색</h1>
            <Search onSearch={handleSearch} providers={provider} />
            <ProviderList
                providers={currentProviders}
                businessTypes={businessTypes}
                relations={relations}
            />
            <Pagination
                currentPage={currentPage}
                totalItems={provider.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default SearchProvider;
