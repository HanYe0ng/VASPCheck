import { ProviderDetail } from "./useProviderDetail";
import { Link } from "react-router-dom";

const ProviderList = ({ providerDetail }: { providerDetail: ProviderDetail[] }) => {
    if (!providerDetail || providerDetail.length === 0) return <p className="text-gray-600">등록된 거래소가 없습니다.</p>;

    return (
        <ul className="space-y-4">
            {providerDetail.map((p: ProviderDetail) => (
                <li
                    key={p.code}
                    className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-md transition"
                >
                    <Link
                        to={`/providerresult/${p.code}`}
                        state={{ providerDetail: p }}
                        className="text-blue-600 hover:underline text-lg font-semibold"
                    >
                        {p.serviceName}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ProviderList;
