package com.fss.backend.entity;

import java.util.*;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "business_type")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusinessTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, name = "type_name")
    private String typeName;

    // 양방향 매핑 (선택)
    @OneToMany(mappedBy = "businessType")
    private List<ProviderBusinessTypeEntity> providerBusinessTypes = new ArrayList<>();
}

