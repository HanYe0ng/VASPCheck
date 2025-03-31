export interface NoticeDetail {
    notificaitonId: number; // 오타 그대로 사용하거나, 백엔드 수정 요청
    title: string;
    summary: string;
    content: string;
    createdAt: string;
    updatedAt: string | null;
}

export const getNoticeDetail = async (notificationId: number): Promise<NoticeDetail | null> => {
    try {
        const res = await fetch(`http://localhost:4000/api/v1/notification/${notificationId}`);

        if (!res.ok) {
            console.error("❌ 서버 응답 실패:", res.status);
            return null;
        }

        const data = await res.json();
        console.log("📦 받은 데이터:", data);

        // 여기서 data 자체가 NoticeDetail이라고 가정
        return data;
    } catch (error) {
        console.error("🚨 getNoticeDetail 에러:", error);
        return null;
    }
};
