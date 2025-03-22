import Search from '../components/Exchange/Search'
import { useState } from "react";
import ProviderList from "../components/Exchange/ProviderList";

const ProvidersPage = () => {
    const [searchResult, setSearchResult] = useState("");

    const handleSearch = (term: string) => {
        console.log("검색어:", term);
        setSearchResult(term);
    };

    return (
        <div>
            <h1>거래소 검색</h1>
            <Search onSearch={handleSearch} />
            <ProviderList />
        </div>
    );
};

export default ProvidersPage;
