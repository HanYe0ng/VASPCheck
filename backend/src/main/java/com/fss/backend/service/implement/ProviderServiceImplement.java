package com.fss.backend.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fss.backend.dto.response.ResponseDto;
import com.fss.backend.dto.response.vasp.GetAllProviderResponseDto;
import com.fss.backend.dto.response.vasp.GetProviderResponseDto;
import com.fss.backend.entity.ProviderBusinessTypeEntity;
import com.fss.backend.entity.ProviderEntity;
import com.fss.backend.repository.ProviderBusinessTypeRepository;
import com.fss.backend.repository.ProviderRepository;
import com.fss.backend.service.ProviderService;


import java.util.*;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProviderServiceImplement implements ProviderService{

    private final ProviderRepository providerRepository;
    private final ProviderBusinessTypeRepository providerBusinessTypeRepository;

    public ResponseEntity<? super GetProviderResponseDto> getProvider(String serviceName) {
        try {
            Optional<ProviderEntity> optionalProvider = providerRepository.findByServiceName(serviceName);
    
            if (optionalProvider.isEmpty()) {
                return GetProviderResponseDto.notFound();  // 거래소 없을 때 응답인데, 없다고 띄워주게 해야하니까 프론트에서 처리하기
            }
    
            ProviderEntity provider = optionalProvider.get();
    
            // 🔽 여기서 providerId로 연결된 비즈니스 유형 엔티티들 조회
            List<ProviderBusinessTypeEntity> relations = providerBusinessTypeRepository.findByProviderId(provider.getId());
    
            // 🔽 BusinessType 이름만 추출해서 List<String>으로 변환
            List<String> businessTypeList = relations.stream()
                .map(relation -> relation.getBusinessType().getTypeName())
                .toList();
    
         
            return GetProviderResponseDto.success(provider, businessTypeList);
    
        } catch (Exception e) {
            return ResponseDto.databaseError(); // 공통 에러 응답
        }
    }

    @Override
    public ResponseEntity<? super GetAllProviderResponseDto> getAllProvider() {
        System.out.println("요청은 넘어옴");
        try {
            List<ProviderEntity> providers = providerRepository.findAll();
            return GetAllProviderResponseDto.success(providers);
        } catch (Exception e) {
            return ResponseDto.databaseError(); // 공통 DB 에러 처리
        }
               
    }
        
    
}
