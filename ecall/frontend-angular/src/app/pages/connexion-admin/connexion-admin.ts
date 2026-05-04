import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-connexion-admin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './connexion-admin.html',
  styleUrls: ['../../../styles/auth.css']
})
export class ConnexionAdmin {
  email = '';
  motDePasse = '';
  message = '';

  constructor(private api: ApiService, private router: Router) {}

  connecter() {
    if (!this.email || !this.motDePasse) {
      this.message = 'Champs obligatoires';
      return;
    }
    this.api.connexionAdmin({ email: this.email, motDePasse: this.motDePasse }).subscribe({
      next: (res) => {
        localStorage.setItem('admin', JSON.stringify(res));
        this.router.navigate(['/admin']);
      },
      error: () => this.message = 'Identifiants admin incorrects'
    });
  }
}