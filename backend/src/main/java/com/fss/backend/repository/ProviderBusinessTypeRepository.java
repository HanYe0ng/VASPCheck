package com.fss.backend.repository;

import com.fss.backend.entity.ProviderBusinessTypeEntity;
import com.fss.backend.entity.ProviderBusinessTypeIdEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProviderBusinessTypeRepository extends JpaRepository<ProviderBusinessTypeEntity, ProviderBusinessTypeIdEntity> {

    // 특정 거래소의 비즈니스 유형 목록 조회
    List<ProviderBusinessTypeEntity> findByProviderId(Long providerId);

    // 특정 비즈니스 유형을 가진 거래소들 조회
    List<ProviderBusinessTypeEntity> findByBusinessTypeId(Long businessTypeId);

    // 특정 거래소와 유형이 연결돼 있는지 확인
    boolean existsByProviderIdAndBusinessTypeId(Long providerId, Long businessTypeId);
}