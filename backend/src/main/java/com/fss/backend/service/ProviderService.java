package com.fss.backend.service;

import org.springframework.http.ResponseEntity;

import com.fss.backend.dto.response.vasp.GetProviderResponseDto;

public interface ProviderService {
    ResponseEntity<? super GetProviderResponseDto> getProvider(String serviceName);
    
}
