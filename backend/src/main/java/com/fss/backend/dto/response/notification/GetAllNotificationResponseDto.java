package com.fss.backend.dto.response.notification;

import com.fss.backend.common.ResponseCode;
import com.fss.backend.common.ResponseMessage;
import com.fss.backend.dto.response.ResponseDto;
import com.fss.backend.dto.response.vasp.GetAllProviderResponseDto;
import com.fss.backend.entity.ProviderEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Getter
public class GetAllNotificationResponseDto extends ResponseDto {

    private List<NotificationSummary> notices;

    public GetAllNotificationResponseDto(List<NotificationSummary> notices) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.notices = notices;
    }

    public static ResponseEntity<GetAllNotificationResponseDto> success(List<NotificationSummary> notices) {
        GetAllNotificationResponseDto result = new GetAllNotificationResponseDto(notices);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @Getter
    @AllArgsConstructor
    public static class NotificationSummary {
        private Long noticeId;
        private String summary;
        private LocalDate date;
    }
}
