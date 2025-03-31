import { useState } from "react";
import Pagination from "../components/common/Pagination";
import NotificationList from "../components/notification/NotificationList";
import { useNoticesAllDetail } from "../components/notification/useNotice";

export default function Notification(){
    const notices = useNoticesAllDetail();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNotices = notices.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">공지사항</h1>
            <NotificationList noticeList={currentNotices} />
            <Pagination
                currentPage={currentPage}
                totalItems={notices.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>

    );
}