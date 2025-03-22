import {useLocation} from "react-router-dom";
import {BusinessTypes, ProviderBusinessTypes} from "../components/Exchange/useProviderDetail";
//
// interface LocationState {
//     provider: Provider[];
//     businessTypes: BusinessTypes[];
//     relations: ProviderBusinessTypes[];
// }

const ProviderResult = () => {
    const location = useLocation();
    const {provider, businessTypes, relations} = location.state;

    if (!provider) return <p>데이터 없음</p>;

    const relatedTypeIds = relations
        .filter((rel:ProviderBusinessTypes) => rel.provider_id === provider.id)
        .map((rel:ProviderBusinessTypes) => rel.business_type_id);

    const typeNames = businessTypes
        .filter((bt:BusinessTypes) => relatedTypeIds.includes(bt.id))
        .map((bt:BusinessTypes) => bt.typeName);

    return (
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{provider.serviceName}</h2>
            <p><strong>법인명:</strong> {provider.corporationName}</p>
            <p><strong>사업자등록번호:</strong> {provider.businessRegistrationNumber}</p>
            <p><strong>대표자:</strong> {provider.ceo}</p>
            <p><strong>소재지:</strong> {provider.address}</p>
            <p><strong>웹사이트:</strong> <a href={provider.website}>{provider.website}</a></p>
            <p><strong>이메일:</strong> {provider.contactEmail}</p>
            <p><strong>신고 접수일:</strong> {provider.reportedDate}</p>
            <p><strong>신고 수리일:</strong> {provider.approvalDate}</p>
            <p><strong>ISMS-P 인증:</strong> {provider.ismsCertified ? "인증됨" : "없음"}</p>
            <p><strong>신고여부:</strong> {provider.isReported ? "등록됨" : "미등록"}</p>
            <p><strong>비즈니스 유형:</strong> {typeNames.join(', ')}</p>
        </div>
    );
};

export default ProviderResult;