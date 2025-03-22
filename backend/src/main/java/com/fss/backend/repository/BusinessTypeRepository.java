package com.fss.backend.repository;

import com.fss.backend.entity.BusinessTypeEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessTypeRepository extends JpaRepository<BusinessTypeEntity, Long> {
    
}
