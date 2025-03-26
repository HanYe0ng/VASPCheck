package com.fss.backend.dto.response.notification;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fss.backend.common.ResponseCode;
import com.fss.backend.common.ResponseMessage;
import com.fss.backend.dto.response.ResponseDto;
import com.fss.backend.entity.NotificationEntity;

import lombok.Getter;

@Getter
public class GetNotificationDetailResponseDto extends ResponseDto {
    
    private Long notificaitonId;
    private String title;
    private String summary;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public GetNotificationDetailResponseDto(NotificationEntity notificationEntity) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.notificaitonId = notificationEntity.getId();
        this.title = notificationEntity.getTitle();
        this.summary = notificationEntity.getSummary();
        this.content = notificationEntity.getContent();
        this.createdAt = notificationEntity.getCreatedAt();
        this.updatedAt = notificationEntity.getUpdatedAt();
    }

    public static ResponseEntity<GetNotificationDetailResponseDto> success(NotificationEntity notificationEntity) {
        GetNotificationDetailResponseDto result = new GetNotificationDetailResponseDto(notificationEntity);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> notFound() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_NOTIFICATION, ResponseMessage.NOT_EXISTED_NOTIFICATION);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }


}
