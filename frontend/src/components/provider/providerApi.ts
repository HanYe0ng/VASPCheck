import { ProviderDetail } from "./useProviderDetail"; // 필요 시 타입 분리

export const getProviderDetail = async (serviceName: string): Promise<ProviderDetail | null> => {
    try {
        const params = new URLSearchParams({ serviceName });
        const res = await fetch(`http://localhost:4000/api/v1/providers?${params.toString()}`);
        const data = await res.json();
        return data; // ProviderDetail 형식의 데이터
    } catch (error) {
        console.error("❌ getProviderDetail 에러:", error);
        return null;
    }
};
