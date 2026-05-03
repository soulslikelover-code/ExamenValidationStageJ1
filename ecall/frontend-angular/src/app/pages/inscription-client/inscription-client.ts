import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inscription-client',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './inscription-client.html',
  styleUrls: ['../../../styles/auth.css']
})
export class InscriptionClient {
  nom = ''; prenom = ''; email = ''; motDePasse = ''; telephone = '';
  message = '';

  constructor(private api: ApiService) {}

  inscrire() {
    if (!this.nom || !this.prenom || !this.email || !this.motDePasse || !this.telephone) {
      this.message = 'Champs obligatoires';
      return;
    }
    const client = { nom: this.nom, prenom: this.prenom, email: this.email, motDePasse: this.motDePasse, telephone: this.telephone };
    this.api.inscrireClient(client).subscribe({
      next: () => {
        this.message = 'Inscription réussie';
        this.nom = ''; this.prenom = ''; this.email = ''; this.motDePasse = ''; this.telephone = '';
      },
      error: (err) => {
        this.message = err.status === 409 ? 'Cet email existe déjà' : 'Erreur lors de l\'inscription';
      }
    });
  }
}
