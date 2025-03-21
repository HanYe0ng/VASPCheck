import { useEffect, useState } from "react";

export interface Notice {
    id: number;
    title: string;
    summary: string;
    content: string;
    createdAt: string;
    updatedAt: string | null;
}

export const useNotices = () => {
    const [notices, setNotices] = useState<Notice[] | null>(null);

    useEffect(() => {
        fetch('/data/notificationData.json')
            .then((res) => res.json())
            .then((data) => setNotices(data))
            .catch((error) => {
                console.error("공지사항 로딩 실패:", error);
                setNotices([]); // 에러 발생 시 빈 배열로 처리
            });
    }, []);

    return notices;
};
