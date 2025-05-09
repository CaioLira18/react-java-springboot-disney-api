package com.caio.disney.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.caio.disney.entities.User;
import com.caio.disney.repository.UserRepository;

public class UserService {


    @Autowired
    UserRepository userRepository;

    public Optional<User> findById(String id){
        return userRepository.findById(id);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }
}
