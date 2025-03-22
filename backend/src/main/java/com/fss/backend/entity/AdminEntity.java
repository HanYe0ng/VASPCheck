package com.fss.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admin") //DB에 admin테이블과 매칭되게함.
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 255)
    private String username;

    @Column(nullable = false, length = 255)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Role role;  // 역할 (현재 ADMIN만 존재)

    // 내부 enum 정의
    public enum Role {
        ADMIN
    }


}
