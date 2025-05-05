package com.caio.disney.resource;

import com.caio.disney.entities.Personagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

import com.caio.disney.repository.PersonagemRepository;

@RestController
@RequestMapping("/personagens")
public class PersonagemResource {

    @Autowired
    private PersonagemRepository repository;

    @GetMapping
    public List<Personagem> findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Personagem> findById(@PathVariable String id) {
        Optional<Personagem> obj = repository.findById(id);
        return obj.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Personagem insert(@RequestBody Personagem personagem) {
        return repository.save(personagem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Personagem> update(@PathVariable String id, @RequestBody Personagem personagem) {
        Optional<Personagem> optional = repository.findById(id);
        if (!optional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        personagem.setId(id); // garantir que o ID está correto
        return ResponseEntity.ok(repository.save(personagem));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
