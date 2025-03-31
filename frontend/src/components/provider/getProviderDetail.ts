import { ProviderDetail } from "./useProviderDetail";

export const getProviderDetail = async (serviceName: string): Promise<ProviderDetail | null> => {
    try {
        const params = new URLSearchParams({ serviceName });
        const res = await fetch(`http://localhost:4000/api/v1/providers?${params.toString()}`);
        const data = await res.json();
        console.log("데이터 잘 불러옴")
        return data;
    } catch (error) {
        console.error("getProviderDetail 에러:", error);
        return null;
    }
};
