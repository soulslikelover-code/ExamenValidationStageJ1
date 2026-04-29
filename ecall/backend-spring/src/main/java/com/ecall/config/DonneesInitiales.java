package com.ecall.config;

import com.ecall.model.Administrateur;
import com.ecall.repository.AdministrateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DonneesInitiales {

    @Bean
    CommandLineRunner initAdmin(AdministrateurRepository administrateurRepository) {
        return args -> {
            if (administrateurRepository.findByEmail("admin@gmail.com").isEmpty()) {
                Administrateur admin = new Administrateur();
                admin.setNom("Admin");
                admin.setPrenom("Principal");
                admin.setEmail("admin@gmail.com");
                admin.setMotDePasse("azerty");
                admin.setTelephone("00000000");
                admin.setStatut("ACTIF");
                administrateurRepository.save(admin);
            }
        };
    }
}