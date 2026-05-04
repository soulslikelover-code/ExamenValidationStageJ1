package com.ecall.controller;

import com.ecall.model.Client;
import com.ecall.service.ServiceClient;
import com.ecall.service.ServiceEmail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
public class ControleurClient {

    private final ServiceClient serviceClient;
    private final ServiceEmail serviceEmail;

    public ControleurClient(ServiceClient serviceClient, ServiceEmail serviceEmail) {
        this.serviceClient = serviceClient;
        this.serviceEmail = serviceEmail;
    }

    @PostMapping("/inscription")
    public ResponseEntity<?> inscrire(@RequestBody Client client) {
        Optional<Client> existant = serviceClient.trouverParEmail(client.getEmail());
        if (existant.isPresent()) {
            return ResponseEntity.status(409).body("Cet email existe déjà");
        }
        Client nouveau = serviceClient.inscrire(client);
        try {
            serviceEmail.envoyerEmailBienvenue(nouveau.getEmail(), nouveau.getPrenom());
        } catch (Exception e) {
            System.err.println("Erreur envoi email : " + e.getMessage());
        }
        return ResponseEntity.ok(nouveau);
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