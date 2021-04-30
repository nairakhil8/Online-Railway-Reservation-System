package com.casestudy.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.casestudy.model.TrainDetails;
import com.casestudy.repository.TrainRepository;

@Service
public class TrainService {

	@Autowired
	private TrainRepository trainRepository;
	
	public List<TrainDetails> getAllTrains(){
		List<TrainDetails> trains = new ArrayList<>();
		trainRepository.findAll().forEach(trains::add);
		return trains;
	}
	
	public TrainDetails addTrains(TrainDetails trains) {
		trainRepository.save(trains);
		return trains;
	}
	
	public List<TrainDetails> checkTrains(String source, String destination, String date){
		List<TrainDetails> trains = trainRepository.findAllBySourceAndDestinationAndDate(source, destination, date);
		
		return trains;
		
	}

	public List<TrainDetails> getTrainByName(String search) {
		List<TrainDetails> searchTrain = trainRepository.findAllByName(search);
		return searchTrain;
	}
	
	public TrainDetails getTrainById(String search) {
		Optional<TrainDetails> optTrain = trainRepository.findById(search);
		TrainDetails searchTrain = optTrain.get();
		return searchTrain;
	}

	public void updateTrain(TrainDetails trainDetails) {
		trainRepository.save(trainDetails);
		
	}

	public String removeTrain(String trainId) {
		trainRepository.deleteById(trainId);
		return "Train Deleted Successfully";
	}
	
	
}