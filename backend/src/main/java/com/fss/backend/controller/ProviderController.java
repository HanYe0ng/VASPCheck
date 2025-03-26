package com.fss.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fss.backend.service.ProviderService;
import com.fss.backend.dto.response.vasp.GetProviderResponseDto;
import com.fss.backend.dto.response.vasp.GetAllProviderResponseDto;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("api/v1/providers")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
public class ProviderController {

    private final ProviderService providerService;

    @GetMapping
    public ResponseEntity<? super GetProviderResponseDto> getProvider(
        @RequestParam("serviceName") String serviceName
    ) {
        return providerService.getProvider(serviceName);
    }

    @GetMapping("/all")
    public ResponseEntity<? super GetAllProviderResponseDto> getAllProvider() {
        System.out.println("컨트롤러넘어왔다");
        return providerService.getAllProvider();
    }
}
