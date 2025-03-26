import { ProviderDetailSummary } from "./useProviderDetail";
import { Link } from "react-router-dom";

interface ProviderListProps {
    providerList: ProviderDetailSummary[];
}

const ProviderList = ({ providerList }: ProviderListProps) => {
    if (!providerList || providerList.length === 0)
        return <p className="text-gray-600">등록된 거래소가 없습니다.</p>;

    return (
        <ul className="space-y-4">
            {providerList.map((p) => (
                <Link
                    key={p.serviceName}
                    to={`/providerresult/${p.serviceName}`}
                    state={{ serviceName: p.serviceName }}
                    className="block bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-md transition"
                >
                    <li className="text-blue-600 hover:underline text-lg font-semibold">
                        {p.serviceName}
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default ProviderList;
