package com.ecall.controller;

import com.ecall.model.Appel;
import com.ecall.service.ServiceAppel;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/appels")
public class ControleurAppel {

    private final ServiceAppel serviceAppel;

    public ControleurAppel(ServiceAppel serviceAppel) {
        this.serviceAppel = serviceAppel;
    }

    @PostMapping
    public Appel lancerAppel(@RequestBody Appel appel) {
        return serviceAppel.lancerAppel(appel);
    }

    @GetMapping
    public List<Appel> lister() { return serviceAppel.lister(); }

    @PutMapping("/{id}/statut")
    public Appel changerStatut(@PathVariable Long id, @RequestParam String statut) {
        return serviceAppel.changerStatut(id, statut);
    }
}