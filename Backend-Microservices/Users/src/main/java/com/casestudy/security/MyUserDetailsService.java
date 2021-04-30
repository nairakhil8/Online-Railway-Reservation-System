package com.casestudy.security;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.casestudy.model.Users;
import com.casestudy.repository.UsersRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	UsersRepository usersRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Users> user = usersRepository.findById(username);
		
		user.orElseThrow(() -> new UsernameNotFoundException("Not Found : "+username));
		return user.map(MyUserDetails::new).get();
		
	}

}