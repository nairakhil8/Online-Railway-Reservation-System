package com.casestudy.Model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class TrainDetails {
	@Id
	private String trainId;
	private String name;
	private String source;
	private String destination;
	private int departureTime;
	private int arrivalTime;
	private int duration;
	private String date;
	private int seatsLeft;
	private int generalFare;
	private int ladiesFare;
	
	public TrainDetails() {
	
	}
	
	public TrainDetails(String trainId, String name, String source, String destination, int departureTime,
			int arrivalTime, int duration, String date, int seatsLeft, int generalFare, int ladiesFare) {
		super();
		this.trainId = trainId;
		this.name = name;
		this.source = source;
		this.destination = destination;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.duration = duration;
		this.date = date;
		this.seatsLeft = seatsLeft;
		this.generalFare = generalFare;
		this.ladiesFare = ladiesFare;
	}

	public String getTrainId() {
		return trainId;
	}

	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(int departureTime) {
		this.departureTime = departureTime;
	}

	public int getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(int arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	
	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
	
	

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getGeneralFare() {
		return generalFare;
	}

	public void setGeneralFare(int generalFare) {
		this.generalFare = generalFare;
	}

	public int getLadiesFare() {
		return ladiesFare;
	}

	public void setLadiesFare(int ladiesFare) {
		this.ladiesFare = ladiesFare;
	}

	public int getSeatsLeft() {
		return seatsLeft;
	}

	public void setSeatsLeft(int seatsLeft) {
		this.seatsLeft = seatsLeft;
	}
	
	
}
