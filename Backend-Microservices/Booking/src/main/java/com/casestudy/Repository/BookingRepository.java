package com.casestudy.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.Model.Booking;

public interface BookingRepository extends MongoRepository<Booking, Long> {

	Booking findByPnr(long pnr);

}
