package com.example.sampleproject.exception;


import java.time.LocalDateTime;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ExceptionResponse> handleAllExceptions(Exception ex, WebRequest request) {

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ExceptionResponse> handleNotFoundException(NotFoundException ex,
			WebRequest request) {

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);

	}
	
	@ExceptionHandler(EmptyObjectException.class)
	public ResponseEntity<ExceptionResponse> handleEmptyObjectException(EmptyObjectException ex,
			WebRequest request) {

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);

	}
	@ExceptionHandler(InvalidDataTypeException.class)
	public ResponseEntity<ExceptionResponse> handleEmptyObjectException(InvalidDataTypeException ex,
			WebRequest request) {

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);

	}
	
	@ExceptionHandler(OutOfRangeException.class)
	public ResponseEntity<ExceptionResponse> handleEmptyObjectException(OutOfRangeException ex,
			WebRequest request) {

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);

	}
	
	@ExceptionHandler(StringSizeException.class)
	public ResponseEntity<ExceptionResponse> handleEmptyObjectException(StringSizeException ex,
			WebRequest request) {

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);

	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		String message = ex.getBindingResult() 
				.getAllErrors()
				.stream()// 
				.map(recievedError -> {
					return recievedError.getDefaultMessage().concat(",");
				}).collect(Collectors.joining());

		ExceptionResponse err = new ExceptionResponse(LocalDateTime.now(), message, request.getDescription(false));

		return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
	}

}