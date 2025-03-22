package com.fss.backend.dto.response.vasp;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fss.backend.common.ResponseCode;
import com.fss.backend.common.ResponseMessage;
import com.fss.backend.dto.response.ResponseDto;
import com.fss.backend.entity.ProviderEntity;

import lombok.Getter;

@Getter
public class GetProviderResponseDto extends ResponseDto {
    
    private String serviceName;
    private String corporationName;
    private String businessRegistrationNumber;
    private String ceo;
    private String address;
    private String website;
    private String contactEmail;
    private LocalDate reportedDate;
    private LocalDate approvalDate;
    private List<String> businessTypeList;
    private boolean ismsCertified;
    private boolean isReported;

    public GetProviderResponseDto(ProviderEntity provider, List<String> businessTypeList) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.serviceName = provider.getServiceName();
        this.corporationName = provider.getCorporationName();
        this.businessRegistrationNumber = provider.getBusinessRegistrationNumber();
        this.ceo = provider.getCeo();
        this.address = provider.getAddress();
        this.website = provider.getWebsite();
        this.contactEmail = provider.getContactEmail();
        this.approvalDate = provider.getApprovalDate();
        this.reportedDate = provider.getReportedDate();
        this.businessTypeList = businessTypeList;
        this.isReported = provider.getIsReported();
        this.ismsCertified = provider.getIsmsCertified();
    }
    
    public static ResponseEntity<GetProviderResponseDto> success(ProviderEntity provider, List<String> businessTypeList) {
        GetProviderResponseDto result = new GetProviderResponseDto(provider, businessTypeList);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> notFound() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_PROVIDER, ResponseMessage.NOT_EXISTED_PROVIDER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

    
}
