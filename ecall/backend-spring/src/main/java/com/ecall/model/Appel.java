package com.ecall.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "appels")
public class Appel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long clientId;
    private Long agentId;

    private String description;

    @Column(name = "date_appel")
    private LocalDateTime dateAppel = LocalDateTime.now();

    private String statut = "EN_ATTENTE";

    public Appel() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getClientId() { return clientId; }
    public void setClientId(Long clientId) { this.clientId = clientId; }

    public Long getAgentId() { return agentId; }
    public void setAgentId(Long agentId) { this.agentId = agentId; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDateTime getDateAppel() { return dateAppel; }
    public void setDateAppel(LocalDateTime dateAppel) { this.dateAppel = dateAppel; }

    public String getStatut() { return statut; }
    public void setStatut(String statut) { this.statut = statut; }
}