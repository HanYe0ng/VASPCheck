import { NoticeSummary } from "./useNotice";
import { Link } from "react-router-dom";

export interface NotificationListProps {
    noticeList: NoticeSummary[];
}

const NotificationList = ({ noticeList }: NotificationListProps) => {
    if (!noticeList || noticeList.length === 0) {
        return <p className="text-gray-600 text-center py-10">📭 공지가 없습니다.</p>;
    }

    return (
        <div className="px-4 py-6 space-y-4 pb-24">
            {noticeList.map((n) => (
                <Link
                    key={n.noticeId}
                    to={`/noticeresult/${n.noticeId}`}
                    state={{ noticeId: n.noticeId }}
                    className="block bg-white hover:shadow-md transition-shadow rounded-xl p-5 border border-gray-200"
                >
                    <p className="text-base font-medium text-gray-800 line-clamp-2 mb-2">
                        📝 {n.summary}
                    </p>
                    <p className="text-sm text-gray-500">📅 작성일: {n.date}</p>
                </Link>
            ))}
        </div>
    );
};

export default NotificationList;
