import {useEffect, useState} from "react";
import Search from '../components/Exchange/Search'
import ProviderList from "../components/Exchange/ProviderList";
import {Provider} from "../components/Exchange/useProviderDetail"

const ProvidersPage = () => {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [filtered, setFiltered] = useState<Provider[]>([]);
    const navigate = useNavigate();

const SearchRegisteredExchange = () => {
    const handleSearch = (term: string) => {
        if (term.trim() === "") {
            setFiltered(providers);
        } else {
            const result = providers.filter(p =>
                p.serviceName.includes(term)
            );
            setFiltered(result);
        }
    };

    const handleClick = (providerId: number) => {
        navigate(`/provider/${providerId}`);
    };

    return (
        <>
            <h1>등록된 거래소 조회</h1>
            <div>
                <Search onSearch={handleSearch} />
                <ProviderList providers={filtered} onClick={handleClick} />
                {/* 리스트, 페이지네이션, ExchangeContent 등 */}
            </div>
        </>
    );
};

export default SearchRegisteredExchange;