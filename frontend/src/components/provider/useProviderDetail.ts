import { useEffect, useState } from "react";

const DOMAIN = 'http://localhost:4000';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const GET_ALL_PROVIDER_URL = `${API_DOMAIN}/providers/all`;

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
        // const username = "user";
        // const pw = "48bd60ed-b528-4e17-b54b-bff9db0179e8";
        // const encoded = btoa(`${username}:${pw}`);
        console.log("페치 요청 보내기 전");
  
        try {
          console.log("페치 요청 보내기 진짜 전");
          const res = await fetch(GET_ALL_PROVIDER_URL);
  
          if (!res.ok) {
            throw new Error(`HTTP 오류: ${res.status}`);
          }
  
          const data = await res.json();
          setProviderDetail(data);
        } catch (err) {
          console.error("❌ 데이터 가져오기 실패:", err);
          // 실패 시 빈 배열로 초기화하거나 필요한 오류 처리
          setProviderDetail([]);
        }
      };
  
      fetchData();
    }, []);
  
    return providerDetail;
  };

