package com.fss.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fss.backend.service.ProviderService;
import com.fss.backend.dto.response.vasp.GetProviderResponseDto;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("api/v1/providers")
@RequiredArgsConstructor
public class ProviderController {

    private final ProviderService providerService;

    @GetMapping
    public ResponseEntity<? super GetProviderResponseDto> getProvider(
        @RequestParam("serviceName") String serviceName
    ) {
        return providerService.getProvider(serviceName);
    }

    
}
