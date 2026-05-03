import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-connexion-agent',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './connexion-agent.html',
  styleUrls: ['../../../styles/auth.css']
})
export class ConnexionAgent {
  email = '';
  motDePasse = '';
  message = '';

  constructor(private api: ApiService, private router: Router) {}

  connecter() {
    if (!this.email || !this.motDePasse) {
      this.message = 'Champs obligatoires';
      return;
    }
    this.api.connexionAgent({ email: this.email, motDePasse: this.motDePasse }).subscribe({
      next: (agent) => {
        localStorage.setItem('agent', JSON.stringify(agent));
        this.router.navigate(['/agent']);
      },
      error: () => this.message = 'Identifiants agent incorrects'
    });
  }
}
