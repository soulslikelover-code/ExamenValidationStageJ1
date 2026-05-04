package com.ecall.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ServiceEmail {

    private final JavaMailSender mailSender;

    public ServiceEmail(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void envoyerEmailBienvenue(String destinataire, String prenom) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(destinataire);
        message.setSubject("Bienvenue sur E·Call — Votre espace est prêt");
        message.setText(
            "Bonjour " + prenom + ",\n\n" +
            "Nous sommes ravis de vous accueillir sur E·Call.\n\n" +
            "« La qualité d'un service se mesure non pas à ce qu'il promet,\n" +
            "   mais à ce qu'il accomplit. » — Peter Drucker\n\n" +
            "Votre compte a été créé avec succès. Vous pouvez dès maintenant\n" +
            "vous connecter et bénéficier d'un support client réactif et personnalisé.\n\n" +
            "──────────────────────────────\n" +
            "Quelques rappels utiles :\n" +
            "  • Connectez-vous à tout moment sur notre plateforme\n" +
            "  • Lancez un appel en un clic depuis votre espace\n" +
            "  • Notre équipe est disponible 24h/24, 7j/7\n" +
            "──────────────────────────────\n\n" +
            "Si vous avez la moindre question, notre équipe est là pour vous.\n\n" +
            "Avec nos meilleures salutations,\n\n" +
            "L'équipe E·Call\n" +
            " :)\n\n"
        );
        mailSender.send(message);
    }
}