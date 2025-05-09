package com.caio.disney.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.caio.disney.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    
}
