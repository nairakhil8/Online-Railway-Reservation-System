package com.casestudy.security;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String jwt;
    private String role;

    public AuthenticationResponse(String jwt, String role) {
        this.jwt = jwt;
        this.role = role;
    }
    
    

    public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getJwt() {
        return jwt;
    }
}