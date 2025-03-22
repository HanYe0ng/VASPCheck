import Search from '../components/Exchange/Search'
import { useState } from "react";
import ProviderList from "../components/Exchange/ProviderList";
import {useNavigate} from "react-router-dom";
import {useProviderDetail, Provider} from "../components/Exchange/useProviderDetail";

const SearchProvider = () => {
    const { provider, businessTypes, relations } = useProviderDetail();
    const [searchResult, setSearchResult] = useState("");
    const navigate = useNavigate();

    const handleSearch = (term: string) => {
        console.log("검색어:", term);
        setSearchResult(term);
        const matchProvider = provider.filter((p:Provider) => {
            return p.serviceName === term;
        })

        if (matchProvider.length > 0) {
            const matched = matchProvider[0];
            navigate(`/providerresult/${matched.id}`, {
                state: { provider: matched, businessTypes, relations }
            });
        } else {
            navigate('/noresult', { state: { searchTerm: term } });
        }
    };

    return (
        <div>
            <h1>거래소 검색</h1>
            <Search onSearch={handleSearch} providers={provider} />
            <ProviderList providers={provider} businessTypes={businessTypes} relations={relations} />
        </div>
    );
};

export default SearchProvider;
