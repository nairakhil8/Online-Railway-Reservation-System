package com.casestudy.security;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.casestudy.model.Users;


@Service
public class MyUserDetailsService implements UserDetailsService {


	@Autowired
	private RestTemplate restTemplate;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		
		Users user = restTemplate.getForObject("http://Users/getUser/" + username, Users.class);
		
		return new MyUserDetails(user);
	}

}