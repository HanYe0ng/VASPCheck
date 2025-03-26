package com.fss.backend.service;

import org.springframework.http.ResponseEntity;

import com.fss.backend.dto.response.notification.GetAllNotificationResponseDto;
import com.fss.backend.dto.response.notification.GetNotificationDetailResponseDto;

public interface NotificationService {
    ResponseEntity<? super GetAllNotificationResponseDto> getAllNotification(); 
    ResponseEntity<? super GetNotificationDetailResponseDto> getNotificationDetail(Integer notification_id);
    
}
