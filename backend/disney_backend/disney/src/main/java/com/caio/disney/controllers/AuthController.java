package com.caio.disney.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caio.disney.entities.User;
import com.caio.disney.repository.UserRepository;

@RestController
@RequestMapping("/login")
public class AuthController {
   

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/auth")
public ResponseEntity<?> login(@RequestBody User loginRequest) {
    System.out.println("Tentando login com: " + loginRequest.getEmail());

    Optional<User> optionalUser = userRepository.findByEmailAndPassword(
        loginRequest.getEmail(), loginRequest.getPassword()
    );

    if (optionalUser.isPresent()) {
        return ResponseEntity.ok(optionalUser.get());
    } else {
        return ResponseEntity.status(401).body("Usuário ou senha inválidos");
    }
}

}
