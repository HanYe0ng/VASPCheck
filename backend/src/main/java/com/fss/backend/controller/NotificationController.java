package com.fss.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fss.backend.dto.response.notification.*;
import com.fss.backend.service.NotificationService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("api/v1/notification")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("/all")
    public ResponseEntity<? super GetAllNotificationResponseDto> getAllNotification(
    ) {
        return notificationService.getAllNotification();
    }

    @GetMapping("/{notificationID}")
    public ResponseEntity<? super GetNotificationDetailResponseDto> getNotificationDetail(
        @PathVariable("notificationID") Integer notificationID
    ) {
        return notificationService.getNotificationDetail(notificationID);
    }
    
}
