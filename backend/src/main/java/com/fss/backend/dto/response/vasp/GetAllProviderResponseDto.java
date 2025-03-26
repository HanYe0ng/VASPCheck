package com.fss.backend.dto.response.vasp;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fss.backend.common.ResponseCode;
import com.fss.backend.common.ResponseMessage;
import com.fss.backend.dto.response.ResponseDto;
import com.fss.backend.entity.ProviderEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
public class GetAllProviderResponseDto extends ResponseDto {

    private List<SimpleProvider> providerList;

    public GetAllProviderResponseDto(List<ProviderEntity> providers) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.providerList = providers.stream()
                .map(provider -> new SimpleProvider(provider.getServiceName()))
                .collect(Collectors.toList());
    }

    public static ResponseEntity<GetAllProviderResponseDto> success(List<ProviderEntity> providers) {
        GetAllProviderResponseDto result = new GetAllProviderResponseDto(providers);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> notFound() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_PROVIDER, ResponseMessage.NOT_EXISTED_PROVIDER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    @Getter
    @AllArgsConstructor
    static class SimpleProvider {
        private String serviceName;
    }
}
