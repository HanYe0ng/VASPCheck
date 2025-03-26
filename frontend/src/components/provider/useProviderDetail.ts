import { useEffect, useState } from "react";

export interface ProviderDetail {
    code: string;
    message: string;
    serviceName: string;
    corporationName: string;
    businessRegistrationNumber: string;
    ceo: string;
    address: string;
    website: string;
    contactEmail: string | null;
    reportedDate: string;
    approvalDate: string;
    ismsCertified: boolean;
    reported: boolean;
    businessTypeList: string[];
}

export interface ProviderAllResponse {
    code: string;
    message: string;
    providerList: ProviderDetailSummary[];
}

export interface ProviderDetailSummary {
    serviceName: string;
}

export const useProviderDetail = (serviceName: string) => {
    const [providerDetail, setProviderDetail] = useState<ProviderDetail | null>(null);

    useEffect(() => {
        if (!serviceName.trim()) return;

        const fetchData = async () => {
            try {
                const params = new URLSearchParams({ serviceName });
                const res = await fetch(`http://localhost:4000/api/v1/providers?${params.toString()}`);
                const data: ProviderDetail = await res.json(); // ✅ 전체 응답이 ProviderDetail 구조
                setProviderDetail(data);
            } catch (error) {
                console.error("🚨 useProviderDetail 에러:", error);
            }
        };

        fetchData();
    }, [serviceName]);

    return providerDetail;
};

export const useProviderAllDetail = () => {
    const [providerList, setProviderList] = useState<ProviderDetailSummary[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/v1/providers/all");
                const data: ProviderAllResponse = await res.json();
                setProviderList(data.providerList || []);
            } catch (error) {
                console.error("🚨 useProviderAllDetail 에러:", error);
            }
        };

        fetchData();
    }, []);

    return providerList;
};
