import {useProviderDetail, Provider} from "./useProviderDetail";
import {Link} from "react-router-dom"

const ProviderList = () => {

    const { provider, businessTypes, relations} = useProviderDetail();

    if (!provider) return <p>등록된 거래소가 없습니다.</p>;

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {provider.map((p: Provider) => (
                <li key={p.id} style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
                    <Link
                        to={`/providerresult/${p.id}`}
                        state={{provider:p, businessTypes, relations}}
                    >
                        {p.serviceName}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProviderList;