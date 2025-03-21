import { useEffect, useState } from "react";

export interface Provider {
    id: number;
    serviceName: string;
    corporationName: string;
    businessRegistrationNumber: string;
    ceo: string;
    address: string;
    website: string;
    contactEmail: string;
    reportedDate: string;
    approveDate: string;
    ismsCertified: boolean;
    isReport: boolean;
}

export const useProviderDetail = (id: number) => {
    const [provider, setProvider] = useState<Provider | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/providers.json')
            .then(res => res.json())
            .then((data: Provider[]) => {
                const found = data.find(p => p.id === id);
                setProvider(found || null);
            })
            .catch(err => {
                console.error("데이터 로딩 실패:", err);
                setProvider(null);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { provider, loading };
};
