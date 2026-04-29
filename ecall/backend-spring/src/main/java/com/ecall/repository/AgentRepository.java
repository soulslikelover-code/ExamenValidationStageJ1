package com.ecall.repository;

import com.ecall.model.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AgentRepository extends JpaRepository<Agent, Long> {
    Optional<Agent> findByEmailAndMotDePasse(String email, String motDePasse);
    Optional<Agent> findByEmail(String email);
}