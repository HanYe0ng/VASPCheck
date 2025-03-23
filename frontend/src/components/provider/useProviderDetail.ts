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

export const useProviderDetail = () => {
    const [providerDetail, setProviderDetail] = useState<ProviderDetail[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const provRes = await fetch('/data/providerDetail.json').then(res => res.json());
            setProviderDetail(provRes);
        }
        fetchData();
    }, []);

    return providerDetail;
};

