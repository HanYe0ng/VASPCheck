package com.fss.backend.repository;

import com.fss.backend.entity.ProviderEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<ProviderEntity, Long> {
    
    // 기본 제공: findById, findAll, save, deleteById 등
    
    // 커스텀 조회: 서비스명으로 조회
    ProviderEntity findByServiceName(String serviceName);
    
    // 신고 여부로 필터링
    List<ProviderEntity> findByIsReportedTrue(); // 신고 완료된 거래소
    List<ProviderEntity> findByIsReportedFalse(); // 신고 안 된 거래소

    // ISMS 인증된 거래소만 조회
    List<ProviderEntity> findByIsmsCertifiedTrue();
}
