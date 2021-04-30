package com.casestudy.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.model.Users;

public interface UsersRepository extends MongoRepository<Users, String> {
	
	
}
