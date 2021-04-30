package com.casestudy.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Booking {
	
	@Transient
    public static final String SEQUENCE_NAME = "tickets_sequence";
	
	@Id
	private long pnr;
	private String username;
	private String trainId;
	private String name;
	private String date;
	private int seats;
	private String source;
	private String destination;
	private String quota;
	private int totalFare;
	
	public Booking() {
		
	}
	
	public Booking(long pnr, String username, String trainId, String name, String date, int seats, String source, String destination,
			String quota, int totalFare) {
		super();
		this.pnr = pnr;
		this.username = username;
		this.trainId = trainId;
		this.name = name;
		this.date = date;
		this.seats = seats;
		this.source = source;
		this.destination = destination;
		this.quota = quota;
		this.totalFare = totalFare;
	}

	public long getPnr() {
		return pnr;
	}

	public void setPnr(long pnr) {
		this.pnr = pnr;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTrainId() {
		return trainId;
	}

	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getTotalFare() {
		return totalFare;
	}

	public void setTotalFare(int totalFare) {
		this.totalFare = totalFare;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
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

	public String getQuota() {
		return quota;
	}

	public void setQuota(String quota) {
		this.quota = quota;
	}
	
}
