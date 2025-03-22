package com.fss.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "provider_business_type")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@IdClass(ProviderBusinessTypeIdEntity.class) // 복합키를 위한 식별자 클래스
public class ProviderBusinessTypeEntity {

    @Id
    @Column(name = "provider_id")
    private Long providerId; //첫번째 복합키

    @Id
    @Column(name = "business_type_id")
    private Long businessTypeId; //두번째 복합키

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩, 실제 접근할 때만 데이터를 DB에서 불러옴.
    @JoinColumn(name = "provider_id", insertable = false, updatable = false) //읽기 전용
    private ProviderEntity provider;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_type_id", insertable = false, updatable = false)
    private BusinessTypeEntity businessType;
}

