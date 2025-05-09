package com.fss.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "providers") //DB에 providers테이블과 매칭되게함.
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProviderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255, name = "service_name")
    private String serviceName;

    @Column(length = 255, name = "corporation_name")
    private String corporationName;

    @Column(length = 50, name = "business_registration_number")
    private String businessRegistrationNumber;

    @Column(length = 255)
    private String ceo;

    @Lob //TEXT자동매핑
    private String address;

    @Column(length = 255)
    private String website;

    @Column(length = 255, name = "contact_email")
    private String contactEmail;

    @Column(name = "reported_date")
    private LocalDate reportedDate;  //로컬데이트가 시간없이 날짜만 넣는용

    @Column(name = "approval_date")
    private LocalDate approvalDate;

    @Column(nullable = false, name = "isms_certified")
    private Boolean ismsCertified = false;

    @Column(nullable = false, name = "is_reported")
    private Boolean isReported = false;
}
