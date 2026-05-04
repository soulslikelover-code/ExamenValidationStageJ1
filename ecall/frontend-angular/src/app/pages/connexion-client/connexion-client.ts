import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-connexion-client',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './connexion-client.html',
  styleUrls: ['../../../styles/auth.css']
})
export class ConnexionClient {
  email = '';
  motDePasse = '';
  message = '';

  constructor(private api: ApiService, private router: Router) {}

  connecter() {
    if (!this.email || !this.motDePasse) {
      this.message = 'Champs obligatoires';
      return;
    }
    this.api.connexionClient({ email: this.email, motDePasse: this.motDePasse }).subscribe({
      next: (client) => {
        localStorage.setItem('client', JSON.stringify(client));
        this.router.navigate(['/client']);
      },
      error: () => this.message = 'Identifiants incorrects'
    });
  }
}
