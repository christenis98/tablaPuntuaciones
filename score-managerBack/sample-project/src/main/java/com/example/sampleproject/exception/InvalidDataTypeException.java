package com.example.sampleproject.exception;

public class InvalidDataTypeException extends RuntimeException {


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidDataTypeException(String message) {
		super(message);
	}
}
