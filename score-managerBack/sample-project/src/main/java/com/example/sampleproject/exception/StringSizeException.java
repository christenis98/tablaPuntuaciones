package com.example.sampleproject.exception;

public class StringSizeException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public StringSizeException(String message) {
		super(message);
	}
}
