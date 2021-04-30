package com.casestudy;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.casestudy.model.TrainDetails;
import com.casestudy.repository.TrainRepository;
import com.casestudy.service.TrainService;

@SpringBootTest
class TrainInformationApplicationTests {
	
	@Autowired
	private TrainService trainService;
	
	@MockBean
	private TrainRepository trainRepository;

	@Test
	public void getAllTrainsTest() {
		when(trainRepository.findAll()).thenReturn(Stream
				.of(new TrainDetails("123", "Rajdhani", "source1", "destination1", 1600, 1800, 2, "dateTest", 45, 1000, 500), new TrainDetails("143", "Duronto", "source1", "destination1", 1600, 1800, 2, "dateTest", 45, 1000, 500)).collect(Collectors.toList()));
		assertEquals(2, trainService.getAllTrains().size());
	}
	
	@Test
	public void addTrainsTest() {
		TrainDetails train = new TrainDetails("123", "Rajdhani", "source1", "destination1", 1600, 1800, 2, "dateTest", 45, 1000, 500);
		when(trainRepository.save(train)).thenReturn(train);
		assertEquals(train, trainService.addTrains(train));
	}
	
	@Test
	public void checkTrainsTest() {
		String source = "Delhi";
		String destination = "Kolkata";
		String date = "2021-04-29";
		when(trainRepository.findAllBySourceAndDestinationAndDate(source, destination, date))
		.thenReturn(Stream.of(new TrainDetails("123", "Rajdhani", "Delhi", "Kolkata", 1600, 1800, 2, "2021-04-29", 45, 1000, 500)).collect(Collectors.toList()));
		assertEquals(1, trainService.checkTrains(source, destination, date).size());
	}
	
	@Test
	public void getTrainByNameTest() {
		String name="Rajdhani";
		when(trainRepository.findAllByName(name))
		.thenReturn(Stream.of(new TrainDetails("123", "Rajdhani", "Delhi", "Kolkata", 1600, 1800, 2, "2021-04-29", 45, 1000, 500)).collect(Collectors.toList()));
		assertEquals(1, trainService.getTrainByName(name).size());
	}
	
	@Test
	public void getTrainByIdTest() {
		String trainId = "1234";
		Optional<TrainDetails> trainOpt = Optional.of(new TrainDetails("1234", "Rajdhani", "Delhi", "Kolkata", 1600, 1800, 2, "2021-04-29", 45, 1000, 500));
		when(trainRepository.findById(trainId))
		.thenReturn(trainOpt);
		TrainDetails train = trainOpt.get();
		assertEquals(train, trainService.getTrainById(trainId));
	}
	
	
}
