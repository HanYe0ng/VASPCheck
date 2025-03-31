import { useEffect, useState } from "react";

export interface Notice {
    id: number;
    title: string;
    summary: string;
    content: string;
    createdAt: string;
    updatedAt: string | null;
}

export interface NoticeSummary {
    noticeId: number;
    summary: string;
    date: string;
}

export interface NoticeAllResponse {
    code: string;
    message: string;
    notices: NoticeSummary[];
}

export const useNoticesAllDetail = () => {
    const [noticeList, setNoticeList] = useState<NoticeSummary[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/v1/notification/all");
                const data: NoticeAllResponse = await res.json();
                setNoticeList(data.notices);
            } catch (error) {
                console.error("🚨 useProviderAllDetail 에러:", error);
            }
        };

        fetchData();
    }, []);

    return noticeList;
};