package com.example.sampleproject;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SampleProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleProjectApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(GroupRepository repository) {
		return args -> {
			Group group = new Group(
					"Group 1",
					List.of("Claudia", "Timotei", "Nestor", "Ivan", "Sergio", "Cristian", "Lina", "Pedro"),
					3
			);
			repository.insert(group);
		};
	}


}
