package com.example.blood;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@SpringBootApplication
public class BloodySweetApplication {

	public static void main(String[] args) {
		SpringApplication.run(BloodySweetApplication.class, args);



	}

}
