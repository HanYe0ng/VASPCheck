package com.fss.backend.common;

public interface ResponseMessage {
    //200
   String SUCCESS = "Success."; // 모든 인터페이스는 public static final, 모두 접근가능, 변형x, 상수형태, 지워도 인터페이시는 저렇게 인식함
   
   //400
   String VALIDATION_FAILED = "Validation failed.";
   String DUPLICATE_EMAIL = "Duplicate email.";
   String DUPLICATE_NICKNAME = "Duplicate nickname.";
   String NOT_EXISTED_NOTIFICATION = "This notification does not exist";
   String NOT_EXISTED_PROVIDER = "This provider does not exist.";
   String NOT_EXISTED_BOARD = "This board does not exist.";

   //401
   String SIGN_IN_FAILED = "Login information mismatch.";
   String AUTHORIZATION_FAIL = "Authorization failed.";

   //403
   String NO_PERMISSION = "Do not have permission.";

   //500
   String DATABASE_ERROR = "Database error.";
    
    
}
