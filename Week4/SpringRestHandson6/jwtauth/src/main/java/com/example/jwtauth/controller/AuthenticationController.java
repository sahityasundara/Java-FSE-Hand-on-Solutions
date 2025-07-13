package com.example.jwtauth.controller;

import com.example.jwtauth.service.TokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthenticationController {

    private final TokenService tokenService;

    public AuthenticationController(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        String base64Credentials = authHeader.substring("Basic ".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded);
        String[] parts = credentials.split(":", 2);

        if (parts.length != 2) {
            return ResponseEntity.status(400).body("Invalid credentials format");
        }

        String username = parts[0];
        String password = parts[1];

        // TODO: Replace with actual user verification if needed
        if ("user".equals(username) && "pwd".equals(password)) {
            String token = tokenService.generateToken(username);
            return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
        } else {
            return ResponseEntity.status(401).body("Unauthorized");
        }
    }
}
