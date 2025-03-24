import { useLocation } from "react-router-dom";

const ProviderResult = () => {
    const location = useLocation();
    const { providerDetail } = location.state;

    if (!providerDetail) return <p className="text-center text-gray-500 mt-4">데이터 없음</p>;

    return (
        <div className="mt-20 ml-4 mr-4 bg-white p-6 rounded-xl shadow border border-gray-200 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {providerDetail.serviceName} <span className="text-red-500 font-extrabold">X</span>
            </h2>

            <p className="text-sm text-gray-700 mb-2">
                {providerDetail.serviceName}은(는) 등록된 거래소 입니다.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{providerDetail.serviceName}</h2>

            <p><span className="font-semibold text-gray-700">법인명:</span> {providerDetail.corporationName}</p>
            <p><span className="font-semibold text-gray-700">사업자등록번호:</span> {providerDetail.businessRegistrationNumber}
            </p>
            <p><span className="font-semibold text-gray-700">대표자:</span> {providerDetail.ceo}</p>
            <p><span className="font-semibold text-gray-700">소재지:</span> {providerDetail.address}</p>

            <p>
                <span className="font-semibold text-gray-700">웹사이트:</span>{" "}
                <a
                    href={providerDetail.website}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {providerDetail.website}
                </a>
            </p>

            <p><span className="font-semibold text-gray-700">이메일:</span> {providerDetail.contactEmail || "정보 없음"}</p>
            <p><span className="font-semibold text-gray-700">신고 접수일:</span> {providerDetail.reportedDate}</p>
            <p><span className="font-semibold text-gray-700">신고 수리일:</span> {providerDetail.approvalDate}</p>

            <p>
                <span className="font-semibold text-gray-700">ISMS-P 인증:</span>{" "}
                {providerDetail.ismsCertified ? (
                    <span className="text-green-600 font-semibold">인증됨</span>
                ) : (
                    <span className="text-red-500 font-semibold">없음</span>
                )}
            </p>

            <p>
                <span className="font-semibold text-gray-700">신고여부:</span>{" "}
                {providerDetail.reported ? (
                    <span className="text-green-600 font-semibold">등록됨</span>
                ) : (
                    <span className="text-red-500 font-semibold">미등록</span>
                )}
            </p>

            <p>
                <span className="font-semibold text-gray-700">비즈니스 유형:</span>{" "}
                {providerDetail.businessTypeList.join(", ")}
            </p>
        </div>
    );
};

export default ProviderResult;
