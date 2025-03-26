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
