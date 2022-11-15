package com.example.sampleproject.exception;

public class NotFoundException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5391331482193528928L;

	public NotFoundException(String message) {
		super(message);
	}
}
