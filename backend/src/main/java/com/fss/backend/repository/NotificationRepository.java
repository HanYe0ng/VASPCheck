package com.fss.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fss.backend.entity.NotificationEntity;

public interface NotificationRepository extends JpaRepository<NotificationEntity, Long>{
    
}
