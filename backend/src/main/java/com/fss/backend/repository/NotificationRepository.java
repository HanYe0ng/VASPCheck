package com.fss.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fss.backend.entity.NotificationEntity;

public interface NotificationRepository extends JpaRepository<NotificationEntity, Long>{
    Optional<NotificationEntity> findById(Integer notificationId);
    
}
