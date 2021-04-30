package com.casestudy.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.casestudy.Model.Booking;
import com.casestudy.Model.TrainDetails;
import com.casestudy.Model.Users;
import com.casestudy.Repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public List<Booking> getAllTickets() {
		return bookingRepository.findAll();
	}
	
	public Booking reserveTicket(Booking book) {
		book.setPnr(sequenceGeneratorService.generateSequence(Booking.SEQUENCE_NAME));
		bookingRepository.save(book);
		updateSeats(book);
		updateMyBookings(book);
		return book;
	}
	
	public void cancelTicket(long pnr) {
		cancelSeats(pnr);
		cancelMyBookings(pnr);
		bookingRepository.deleteById(pnr);
	}

	public void updateSeats(Booking book) {
		
		TrainDetails train = restTemplate.getForObject("http://TrainInformation/trainSearchById/"+ book.getTrainId(), TrainDetails.class);
		train.setSeatsLeft(train.getSeatsLeft() - book.getSeats());
		restTemplate.put("http://TrainInformation/updateTrain/", train);			     
	}
	
	public void updateMyBookings(Booking book) {
		Users user = restTemplate.getForObject("http://Users/getUser/" + book.getUsername(), Users.class);
		List<Booking> ticket = user.getBookings();
		ticket.add(book);
		user.setBookings(ticket);
		restTemplate.put("http://Users/updateUser", user);
	}
	
	public void cancelMyBookings(long pnr) {
		Booking book = bookingRepository.findByPnr(pnr);
		
		Users user = restTemplate.getForObject("http://Users/getUser/" + book.getUsername(), Users.class);
		List<Booking> ticket = new ArrayList<Booking>(user.getBookings());
		for( int count = 0; count < ticket.size(); count++) {
			if(ticket.get(count).getPnr()==book.getPnr()) {
				ticket.remove(count);
			}
		}
		user.setBookings(ticket);
		restTemplate.put("http://Users/updateUser", user);
	}
	
	public void cancelSeats(long pnr) {

		Booking book = bookingRepository.findByPnr(pnr);
		
		TrainDetails train = restTemplate.getForObject("http://TrainInformation/trainSearchById/"+ book.getTrainId(), TrainDetails.class);
		train.setSeatsLeft(train.getSeatsLeft() + book.getSeats());
		restTemplate.put("http://TrainInformation/updateTrain/", train);
    
	}
	
	
	
}
