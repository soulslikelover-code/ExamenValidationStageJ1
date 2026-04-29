package com.ecall.service;

import com.ecall.model.Appel;
import com.ecall.repository.AppelRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServiceAppel {

    private final AppelRepository appelRepository;

    public ServiceAppel(AppelRepository appelRepository) {
        this.appelRepository = appelRepository;
    }

    public Appel lancerAppel(Appel appel) {
        return appelRepository.save(appel);
    }

    public List<Appel> lister() {
        return appelRepository.findAll();
    }
}