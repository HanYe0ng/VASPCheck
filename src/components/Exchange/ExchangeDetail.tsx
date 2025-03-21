import { useParams } from "react-router-dom";
import { useProviderDetail } from "./useProviderDetail";

const ExchangeDetail = () => {
    const id = useParams();
    const providerId = Number(id);
    const { provider, loading } = useProviderDetail(providerId);

    if (loading) return <p>로딩 중...</p>;
    if (!provider) return <p>해당 거래소 정보를 찾을 수 없습니다.</p>;

    return (
        <div>
            <h2>{provider.serviceName}</h2>
            <p>법인명: {provider.corporationName}</p>
            <p>웹사이트: <a href={provider.website}>{provider.website}</a></p>
            <p>이메일: {provider.contactEmail}</p>
        </div>
    );
};

export default ExchangeDetail;
