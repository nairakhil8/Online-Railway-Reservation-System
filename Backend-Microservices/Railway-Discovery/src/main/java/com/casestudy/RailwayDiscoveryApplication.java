package com.casestudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;


@SpringBootApplication
@EnableEurekaServer
public class RailwayDiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(RailwayDiscoveryApplication.class, args);
	}
	



}
