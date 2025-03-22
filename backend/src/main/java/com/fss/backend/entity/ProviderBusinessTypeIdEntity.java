package com.fss.backend.entity;

import java.io.Serializable;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProviderBusinessTypeIdEntity implements Serializable { //복합키를 위해 직렬화시키는 클래스가 별도로 필요함.
    private Long providerId;
    private Long businessTypeId;
}

