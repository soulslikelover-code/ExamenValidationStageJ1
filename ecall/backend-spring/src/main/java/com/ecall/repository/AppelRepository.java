package com.ecall.repository;

import com.ecall.model.Appel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppelRepository extends JpaRepository<Appel, Long> {
    List<Appel> findByClientId(Long clientId);
    List<Appel> findByAgentId(Long agentId);
}