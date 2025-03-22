package com.fss.backend.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "notifications") //DB에 notifications테이블과 매칭되게함.
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Lob
    private String summary;

    @Lob
    private String content;

    @CreationTimestamp //엔티티 최초 생성 시 자동으로 현재 시간 저장
    @Column(updatable = false)
    private LocalDateTime createdAt;  // 생성일 (자동 생성)

    @UpdateTimestamp //엔티티가 변경될 때마다 자동으로 갱신
    private LocalDateTime updatedAt;  // 수정일 (업데이트 시 자동 갱신)
}
