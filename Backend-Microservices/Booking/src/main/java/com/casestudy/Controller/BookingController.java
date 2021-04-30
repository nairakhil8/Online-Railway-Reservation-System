package com.casestudy.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.Model.Booking;
import com.casestudy.Service.BookingService;

@CrossOrigin
@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@RequestMapping("/getAllTickets")
	public List<Booking> getAllTickets() {
		return bookingService.getAllTickets();
	}

	@RequestMapping(method=RequestMethod.POST, value="/reserve")
	public String reserveTicket(@RequestBody Booking book) {
		bookingService.reserveTicket(book);
		return "Ticket Reserved !";

	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/cancel/{pnr}")
	public String cancelTicket(@PathVariable long pnr) {
		bookingService.cancelTicket(pnr);
		return "Ticket Cancelled !";
	}
}
