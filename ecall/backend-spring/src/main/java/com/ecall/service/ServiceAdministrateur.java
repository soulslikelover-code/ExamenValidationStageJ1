package com.ecall.service;

import com.ecall.config.PasswordUtil;
import com.ecall.model.Administrateur;
import com.ecall.repository.AdministrateurRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ServiceAdministrateur {

    private final AdministrateurRepository administrateurRepository;

    public ServiceAdministrateur(AdministrateurRepository administrateurRepository) {
        this.administrateurRepository = administrateurRepository;
    }

    public Administrateur ajouter(Administrateur administrateur) {
        administrateur.setMotDePasse(PasswordUtil.hash(administrateur.getMotDePasse()));
        return administrateurRepository.save(administrateur);
    }

    public Administrateur modifier(Long id, Administrateur administrateur) {
        Administrateur existant = administrateurRepository.findById(id).orElseThrow();
        existant.setNom(administrateur.getNom());
        existant.setPrenom(administrateur.getPrenom());
        existant.setEmail(administrateur.getEmail());
        if (administrateur.getMotDePasse() != null && !administrateur.getMotDePasse().isEmpty()) {
            existant.setMotDePasse(PasswordUtil.hash(administrateur.getMotDePasse()));
        }
        existant.setTelephone(administrateur.getTelephone());
        existant.setStatut(administrateur.getStatut());
        return administrateurRepository.save(existant);
    }

    public void supprimer(Long id) {
        administrateurRepository.deleteById(id);
    }

    public List<Administrateur> lister() {
        return administrateurRepository.findAll();
    }

    public Optional<Administrateur> connecter(String email, String motDePasse) {
        return administrateurRepository.findByEmail(email)
                .filter(a -> PasswordUtil.matches(motDePasse, a.getMotDePasse()));
    }
}