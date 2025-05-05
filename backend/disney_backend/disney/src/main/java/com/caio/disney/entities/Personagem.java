package com.caio.disney.entities;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Document(collection="personagens")
public class Personagem {

    @Id
    private String Id;

    private String image;
    private String name;
    private String habilidades;
    private String franquia;
    private String primeira_aparicao;
    private String descricao;

    public Personagem() {

    }
}
