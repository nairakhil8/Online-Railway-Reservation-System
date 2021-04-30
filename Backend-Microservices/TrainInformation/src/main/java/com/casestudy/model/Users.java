package com.casestudy.model;

import org.springframework.data.annotation.Id;

public class Users {
	
	@Id
	private String username;
	private String name;
	private int age;
	private String gender;
	private String email;
	private String password;
	private long contact;
	private String roles;
	
	public Users() {
		
	}
	
	public Users(String username, String name, int age, String gender, String email, String password, long contact, String roles) {
		super();
		this.username = username;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.contact = contact;
		this.roles = roles;
	}
	
	
	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
