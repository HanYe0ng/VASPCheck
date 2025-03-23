import {Provider, ProviderBusinessTypes, BusinessTypes} from "./useProviderDetail";
import {Link} from "react-router-dom"

type ProviderListProps = {
    providers: Provider[];
    businessTypes: BusinessTypes[];
    relations: ProviderBusinessTypes[];
};

const ProviderList = ({providers, businessTypes, relations}:ProviderListProps) => {

    if (!providers) return <p>등록된 거래소가 없습니다.</p>;

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {providers.map((p: Provider) => (
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