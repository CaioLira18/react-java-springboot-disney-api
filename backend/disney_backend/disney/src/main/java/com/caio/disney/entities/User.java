package com.caio.disney.entities;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Document(collection="users")
public class User {

    @Id
    private String id;

    private String name;
    private String email;
    private String password;
    private String cpf;

    public User() {

    }
}
