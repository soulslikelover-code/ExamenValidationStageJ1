package com.ecall.service;

import com.ecall.model.Client;
import com.ecall.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceClient {

    private final ClientRepository clientRepository;

    public ServiceClient(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client inscrire(Client client) {
        return clientRepository.save(client);
    }

    public Optional<Client> trouverParEmail(String email) {
        return clientRepository.findByEmail(email);
    }

    public Optional<Client> connecter(String email, String motDePasse) {
        return clientRepository.findByEmailAndMotDePasse(email, motDePasse);
    }

    public List<Client> lister() {
        return clientRepository.findAll();
    }

    public Client modifier(Long id, Client client) {
        Client existant = clientRepository.findById(id).orElseThrow();
        existant.setNom(client.getNom());
        existant.setPrenom(client.getPrenom());
        existant.setEmail(client.getEmail());
        existant.setMotDePasse(client.getMotDePasse());
        existant.setTelephone(client.getTelephone());
        return clientRepository.save(existant);
    }

    public void supprimer(Long id) {
        clientRepository.deleteById(id);
    }
}