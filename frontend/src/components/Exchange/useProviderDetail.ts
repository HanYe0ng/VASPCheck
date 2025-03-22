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

export interface BusinessTypes{
    id: number;
    typeName: string;
}

export interface ProviderBusinessTypes{
    provider_id: number;
    business_type_id: number;
}

export const useProviderDetail = () => {
    const [provider, setProvider] = useState<Provider[]>([]);
    const [businessTypes, setBusinessTypes] = useState<BusinessTypes[]>([]);
    const [relations, setRelations] = useState<ProviderBusinessTypes[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const [provRes, typeRes, relRes] = await Promise.all([
                fetch('/data/providers.json')
                    .then(res => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! Status: ${res.status}`);
                        }
                        return res.json();
                    }),
                fetch('/data/businessTypes.json').then(res => res.json()),
                fetch('/data/providersBusinessTypes.json').then(res => res.json()),
            ]);
            setProvider(provRes);
            setBusinessTypes(typeRes);
            setRelations(relRes);
        }
        fetchData();
    }, []);

    return { provider, businessTypes, relations };
};

