package com.caio.disney.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.caio.disney.entities.Personagem;

@Repository
public interface PersonagemRepository extends MongoRepository<Personagem, String> {
    
}
