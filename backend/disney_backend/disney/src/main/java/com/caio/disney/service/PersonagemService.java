package com.caio.disney.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.caio.disney.entities.Personagem;
import com.caio.disney.repository.PersonagemRepository;

public class PersonagemService {


    @Autowired
    PersonagemRepository personagemRepository;

    public Optional<Personagem> findById(String id){
        return personagemRepository.findById(id);
    }

    public List<Personagem> findAll(){
        return personagemRepository.findAll();
    }
}
