package com.ecall.controller;

import com.ecall.model.*;
import com.ecall.service.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/connexion")
@CrossOrigin(origins = "http://localhost:4200")
public class ControleurConnexion {

    private final ServiceAdministrateur serviceAdministrateur;
    private final ServiceAgent serviceAgent;
    private final ServiceClient serviceClient;

    public ControleurConnexion(ServiceAdministrateur serviceAdministrateur, ServiceAgent serviceAgent, ServiceClient serviceClient) {
        this.serviceAdministrateur = serviceAdministrateur;
        this.serviceAgent = serviceAgent;
        this.serviceClient = serviceClient;
    }

    @PostMapping("/admin")
    public ResponseEntity<?> connexionAdmin(@RequestBody Administrateur admin) {
        return serviceAdministrateur.connecter(admin.getEmail(), admin.getMotDePasse())
                .<ResponseEntity<?>>map(a -> ResponseEntity.ok(a))
                .orElse(ResponseEntity.status(401).body("Identifiants admin incorrects"));
    }

    @PostMapping("/agent")
    public ResponseEntity<?> connexionAgent(@RequestBody Agent agent) {
        return serviceAgent.connecter(agent.getEmail(), agent.getMotDePasse())
                .<ResponseEntity<?>>map(a -> ResponseEntity.ok(a))
                .orElse(ResponseEntity.status(401).body("Identifiants agent incorrects"));
    }

    @PostMapping("/client")
    public ResponseEntity<?> connexionClient(@RequestBody Client client) {
        return serviceClient.connecter(client.getEmail(), client.getMotDePasse())
                .<ResponseEntity<?>>map(c -> ResponseEntity.ok(c))
                .orElse(ResponseEntity.status(401).body("Identifiants client incorrects"));
    }
}