package com.ecall.controller;

import com.ecall.model.Administrateur;
import com.ecall.service.ServiceAdministrateur;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/administrateurs")
public class ControleurAdministrateur {

    private final ServiceAdministrateur serviceAdministrateur;

    public ControleurAdministrateur(ServiceAdministrateur serviceAdministrateur) {
        this.serviceAdministrateur = serviceAdministrateur;
    }

    @GetMapping
    public List<Administrateur> lister() { return serviceAdministrateur.lister(); }

    @PostMapping
    public Administrateur ajouter(@RequestBody Administrateur administrateur) {
        return serviceAdministrateur.ajouter(administrateur);
    }

    @PutMapping("/{id}")
    public Administrateur modifier(@PathVariable Long id, @RequestBody Administrateur administrateur) {
        return serviceAdministrateur.modifier(id, administrateur);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        serviceAdministrateur.supprimer(id);
    }
}