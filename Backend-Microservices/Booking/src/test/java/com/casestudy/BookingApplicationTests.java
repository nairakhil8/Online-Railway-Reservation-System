package com.casestudy;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.casestudy.Model.Booking;
import com.casestudy.Model.TrainDetails;
import com.casestudy.Repository.BookingRepository;
import com.casestudy.Service.BookingService;

@SpringBootTest
class BookingApplicationTests {
	
	@Autowired
	private BookingService bookingService;
	@MockBean
	private BookingRepository bookingRepository;

	@Test
	public void getAllTicketsTest() {
		when(bookingRepository.findAll()).thenReturn(Stream
				.of(new Booking(234, "express", "akhil", "12345", "2021-04-30", 5, "Delhi", "Kolkata", "General", 5000), new Booking(235, "express", "ankit", "12345", "2021-04-30", 2, "Delhi", "Kolkata", "General", 5000)).collect(Collectors.toList()));
		assertEquals(2, bookingService.getAllTickets().size());
	}
	
	

}
