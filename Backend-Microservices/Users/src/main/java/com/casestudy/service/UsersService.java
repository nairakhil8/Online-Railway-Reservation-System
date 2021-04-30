package com.casestudy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.casestudy.exception.UserNotFoundException;
import com.casestudy.model.Booking;
import com.casestudy.model.Users;
import com.casestudy.repository.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepository usersRepository;
	
	
	public String registerUser(Users user) {		
//	Validation to check if the user is already registered!
		if(usersRepository.existsById(user.getUsername())) {			
			return "Sorry! User is already Registered! Kindly Login!";
		}
		else {
			usersRepository.save(user);
		}
		return "User Registered Successfully";			
	}
	
	
	public Users showProfile() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username;
		if (principal instanceof UserDetails) {
		  username = ((UserDetails)principal).getUsername();
		} else {
		  username = principal.toString();
		}
		Optional<Users> user = usersRepository.findById(username);
		Users userP = user.get();
		return userP;
	}
	

	public Users getUser(String username) throws UserNotFoundException{
		if(usersRepository.findById(username).isEmpty()) {
			throw new UserNotFoundException("OOPS! User does not exist!");
		}
		else {
			Optional<Users> userOpt = usersRepository.findById(username);			
			Users user = userOpt.get();
			return user;
		}		
	}

	public List<Booking> showMyBookings() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username;
		if (principal instanceof UserDetails) {
		  username = ((UserDetails)principal).getUsername();
		} else {
		  username = principal.toString();
		}
		Optional<Users> userOpt = usersRepository.findById(username);
		Users user = userOpt.get();
		List<Booking> tickets = user.getBookings();
		return tickets;
	}

	public void updateUser(Users user) {
		usersRepository.save(user);		
	}

	//ADMIN FUNCTIONALITY
	public String removeUser(String username) throws UserNotFoundException {
		//Validation to check if the user exists
		if(usersRepository.existsById(username)) {
			usersRepository.deleteById(username);
		}
		else {
			throw new UserNotFoundException("No such user exists !");
		}
		return "User has been removed!";
	}
}
