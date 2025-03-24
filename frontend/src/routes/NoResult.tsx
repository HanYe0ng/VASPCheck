import { useLocation } from "react-router-dom";

const NoResult = () => {
    const location = useLocation();
    const { searchTerm } = location.state || {};

    return (
        <div className="mr-4 ml-4 bg-white p-6 rounded-xl shadow border border-gray-200 mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {searchTerm} <span className="text-red-500 font-extrabold">X</span>
            </h2>

            <p className="text-sm text-gray-700 mb-2">
                {searchTerm}은(는) 등록되지 않은 가상자산 거래소 입니다.
            </p>

            <p className="text-sm text-gray-700 mb-4">
                절대로 투자하지 말고 금융감독원에 신고하세요.
            </p>

            <a
                href="https://www.fss.or.kr/fss/cvpl/virtlAstMst/forInsertAgreInvtFrud.do?menuNo=201130"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-semibold hover:underline"
            >
                신고하기
            </a>
        </div>
    );
};

export default NoResult;
