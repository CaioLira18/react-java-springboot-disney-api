package com.caio.disney.dto;

import java.io.Serializable;

import com.caio.disney.entities.Personagem;

public class PersonagemDTO implements Serializable {

    private String Id;
    private String image;
    private String name;
    private String habilidades;
    private String franquia;
    private String primeira_aparicao;
    private String descricao;

    public PersonagemDTO(){

    }

    public PersonagemDTO(Personagem obj) {
        Id = obj.getId();
        image = obj.getImage();
        name = obj.getName();
        habilidades = obj.getHabilidades();
        franquia = obj.getFranquia();
        primeira_aparicao = obj.getPrimeira_aparicao();
        descricao = obj.getDescricao();
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(String habilidades) {
        this.habilidades = habilidades;
    }

    public String getFranquia() {
        return franquia;
    }

    public void setFranquia(String franquia) {
        this.franquia = franquia;
    }

    public String getPrimeira_aparicao() {
        return primeira_aparicao;
    }

    public void setPrimeira_aparicao(String primeira_aparicao) {
        this.primeira_aparicao = primeira_aparicao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    
}
