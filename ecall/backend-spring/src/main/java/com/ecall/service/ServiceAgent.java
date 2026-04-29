package com.ecall.service;

import com.ecall.model.Agent;
import com.ecall.repository.AgentRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ServiceAgent {

    private final AgentRepository agentRepository;

    public ServiceAgent(AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }

    public Agent ajouter(Agent agent) {
        return agentRepository.save(agent);
    }

    public Agent modifier(Long id, Agent agent) {
        Agent existant = agentRepository.findById(id).orElseThrow();
        existant.setNom(agent.getNom());
        existant.setPrenom(agent.getPrenom());
        existant.setEmail(agent.getEmail());
        existant.setMotDePasse(agent.getMotDePasse());
        existant.setTelephone(agent.getTelephone());
        existant.setStatut(agent.getStatut());
        return agentRepository.save(existant);
    }

    public void supprimer(Long id) {
        agentRepository.deleteById(id);
    }

    public List<Agent> lister() {
        return agentRepository.findAll();
    }

    public Optional<Agent> connecter(String email, String motDePasse) {
        return agentRepository.findByEmailAndMotDePasse(email, motDePasse);
    }
}