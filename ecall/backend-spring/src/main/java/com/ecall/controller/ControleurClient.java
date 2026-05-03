package com.ecall.controller;

import com.ecall.model.Client;
import com.ecall.service.ServiceClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
public class ControleurClient {

    private final ServiceClient serviceClient;

    public ControleurClient(ServiceClient serviceClient) {
        this.serviceClient = serviceClient;
    }

    @PostMapping("/inscription")
    public ResponseEntity<?> inscrire(@RequestBody Client client) {
        Optional<Client> existant = serviceClient.trouverParEmail(client.getEmail());
        if (existant.isPresent()) {
            return ResponseEntity.status(409).body("Cet email existe déjà");
        }
        return ResponseEntity.ok(serviceClient.inscrire(client));
    }

    @GetMapping
    public List<Client> lister() { return serviceClient.lister(); }

    @PutMapping("/{id}")
    public Client modifier(@PathVariable Long id, @RequestBody Client client) {
        return serviceClient.modifier(id, client);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        serviceClient.supprimer(id);
    }
}