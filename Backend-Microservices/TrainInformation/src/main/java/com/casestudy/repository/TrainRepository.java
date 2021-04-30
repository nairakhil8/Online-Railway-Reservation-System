package com.casestudy.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.model.TrainDetails;

public interface TrainRepository extends MongoRepository<TrainDetails, String>{

	List<TrainDetails> findAllBySourceAndDestinationAndDate(String source, String destination, String date);

	List<TrainDetails> findAllByName(String name);
	
	
}
