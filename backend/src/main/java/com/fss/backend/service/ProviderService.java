package com.fss.backend.service;

import org.springframework.http.ResponseEntity;

import com.fss.backend.dto.response.vasp.GetProviderResponseDto;
import com.fss.backend.dto.response.vasp.GetAllProviderResponseDto;


public interface ProviderService {
    ResponseEntity<? super GetProviderResponseDto> getProvider(String serviceName);
    ResponseEntity<? super GetAllProviderResponseDto> getAllProvider(); 
    
}
