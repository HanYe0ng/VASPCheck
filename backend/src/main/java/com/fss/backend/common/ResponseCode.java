package com.fss.backend.common;

public interface ResponseCode {
    //200
   String SUCCESS = "SU"; // 모든 인터페이스는 public static final, 모두 접근가능, 변형x, 상수형태, 지워도 인터페이시는 저렇게 인식함
   
   //400
   String VALIDATION_FAILED = "VF";
   String DUPLICATE_EMAIL = "DE";
   String DUPLICATE_NICKNAME = "DN";
   String NOT_EXISTED_NOTIFICATION = "NN";
   String NOT_EXISTED_PROVIDER = "NP";

   //401
   String SIGN_IN_FAILED = "SF";
   String AUTHORIZATION_FAIL = "AF";

   //403
   String NO_PERMISSION = "NP";

   //500
   String DATABASE_ERROR = "DBE";
}
