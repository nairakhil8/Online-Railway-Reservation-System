package com.casestudy.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserNotFoundExceptionHandler {

	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<CustomError> handleUserNotFoundException(UserNotFoundException e){
		CustomError customError = new CustomError(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR );
		return new ResponseEntity<CustomError>(customError, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
