import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { NoticeDetail, getNoticeDetail } from "../components/notification/getNoticeDetail";

const NoticeResult = () => {
    const { noticeId } = useParams<{ noticeId: string }>();
    const numericId = Number(noticeId);

    const location = useLocation();
    const passedDetail = location.state?.noticeDetail as NoticeDetail | undefined;

    const [noticeDetail, setNoticeDetail] = useState<NoticeDetail | null>(passedDetail || null);

    useEffect(() => {
        if (!passedDetail && numericId && !isNaN(numericId)) {
            getNoticeDetail(numericId).then((data) => {
                console.log(data);
                if (data) {
                    setNoticeDetail(data);
                } else {
                    console.error("공지 불러오기 실패");
                }
            });
        }
    }, [passedDetail, numericId]);

    if (!noticeDetail) {
        return <p className="text-center text-gray-500 mt-4">데이터 없음</p>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-20 bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{noticeDetail.title}</h2>

            <div className="text-sm text-gray-600">
                <p><span className="font-medium">작성일:</span> {new Date(noticeDetail.createdAt).toLocaleString()}</p>
                {noticeDetail.updatedAt && (
                    <p><span className="font-medium">수정일:</span> {new Date(noticeDetail.updatedAt).toLocaleString()}</p>
                )}
            </div>

            <hr className="border-gray-200" />

            <p className="text-base text-gray-800 whitespace-pre-line">
                <strong className="block text-gray-700 mb-1">요약:</strong>
                {noticeDetail.summary}
            </p>

            <div className="text-base text-gray-800 whitespace-pre-line">
                <strong className="block text-gray-700 mb-1">내용:</strong>
                {noticeDetail.content}
            </div>
        </div>
    );
};

export default NoticeResult;
