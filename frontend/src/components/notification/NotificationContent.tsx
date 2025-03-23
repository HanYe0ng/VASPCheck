import {useNotices} from "./useNotice";
import Pagination from "../common/Pagination";
import {useState} from "react";

const NotificationContent = () => {
    const notices = useNotices();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNotices = notices.slice(startIndex, startIndex + itemsPerPage);

    if (!notices) return <p>공지 없다.</p>;

    return (
        <div className="px-3 space-y-4 py-3 pb-20">
            {currentNotices.map((n) => (
                <div
                    key={n.id}
                    className="h-[180px] bg-white shadow rounded-xl p-4 border border-gray-200"
                >
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{n.title}</h2>

                    <p className="text-sm text-gray-700 mb-1">
                        <strong>요약:</strong> {n.summary}
                    </p>

                    <p className="text-sm text-gray-700 mb-2">{n.content}</p>

                    <p className="text-xs text-gray-500">
                        작성일: {new Date(n.createdAt).toLocaleString()}
                    </p>

                    {n.updatedAt && (
                        <p className="text-xs text-gray-500">
                            수정일: {new Date(n.updatedAt).toLocaleString()}
                        </p>
                    )}
                </div>
            ))}
            <Pagination
                currentPage={currentPage}
                totalItems={notices.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}

export default NotificationContent;