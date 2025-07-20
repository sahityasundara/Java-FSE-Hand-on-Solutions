package com.example.jwtauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.context.WebServerInitializedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JwtauthApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtauthApplication.class, args);
	}

	@Bean
	public ApplicationListener<WebServerInitializedEvent> webServerListener() {
		return event -> {
			int port = event.getWebServer().getPort();
			System.out.println("🌐 Server started on port: " + port);
		};
	}
}
