package com.ecall.controller;

import com.ecall.model.Agent;
import com.ecall.service.ServiceAgent;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/agents")
@CrossOrigin(origins = "http://localhost:4200")
public class ControleurAgent {

    private final ServiceAgent serviceAgent;

    public ControleurAgent(ServiceAgent serviceAgent) {
        this.serviceAgent = serviceAgent;
    }

    @GetMapping
    public List<Agent> lister() { return serviceAgent.lister(); }

    @PostMapping
    public Agent ajouter(@RequestBody Agent agent) { return serviceAgent.ajouter(agent); }

    @PutMapping("/{id}")
    public Agent modifier(@PathVariable Long id, @RequestBody Agent agent) {
        return serviceAgent.modifier(id, agent);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        serviceAgent.supprimer(id);
    }
}