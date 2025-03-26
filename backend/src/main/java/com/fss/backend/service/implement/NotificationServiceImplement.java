package com.fss.backend.service.implement;

import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fss.backend.dto.response.notification.GetAllNotificationResponseDto;
import com.fss.backend.dto.response.notification.GetNotificationDetailResponseDto;
import com.fss.backend.entity.NotificationEntity;
import com.fss.backend.repository.NotificationRepository;
import com.fss.backend.service.NotificationService;

import java.util.*;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NotificationServiceImplement implements NotificationService{

    private final NotificationRepository notificationRepository;

    @Override
    public ResponseEntity<? super GetAllNotificationResponseDto> getAllNotification() {

    List<NotificationEntity> notificationEntities = notificationRepository
        .findAll(Sort.by(Sort.Direction.DESC, "updatedAt", "createdAt")); //수정일 먼저, 없으면 최초 게시일

    List<GetAllNotificationResponseDto.NotificationSummary> dtoList = notificationEntities.stream()
        .map(entity -> new GetAllNotificationResponseDto.NotificationSummary(
            entity.getId(),
            entity.getSummary(),
            entity.getUpdatedAt() != null
                ? entity.getUpdatedAt().toLocalDate()
                : entity.getCreatedAt().toLocalDate()
        ))
        .collect(Collectors.toList());

    return GetAllNotificationResponseDto.success(dtoList);
    }

    @Override
    public ResponseEntity<? super GetNotificationDetailResponseDto> getNotificationDetail(Integer notification_id) {

        Optional<NotificationEntity> optionalNotification = notificationRepository.findById(notification_id);
        // 1. 존재하지 않을 경우 NOT_FOUND 반환
        if (optionalNotification.isEmpty()) {
            return GetNotificationDetailResponseDto.notFound();
        }

        return GetNotificationDetailResponseDto.success(optionalNotification.get());
        }


    
}
