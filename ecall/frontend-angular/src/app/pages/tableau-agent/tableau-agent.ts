import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tableau-agent',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tableau-agent.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class TableauAgent implements OnInit {
  agent: any = null;
  modificationMode = false;
  nom = ''; prenom = ''; email = ''; telephone = ''; motDePasse = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('agent');
    if (!data) { this.router.navigate(['/agent/connexion']); return; }
    this.agent = JSON.parse(data);
  }

  editer() {
    this.modificationMode = true;
    this.nom = this.agent.nom;
    this.prenom = this.agent.prenom;
    this.email = this.agent.email;
    this.telephone = this.agent.telephone;
    this.motDePasse = '';
  }

  modifier() {
    const data = { nom: this.nom, prenom: this.prenom, email: this.email, telephone: this.telephone, motDePasse: this.motDePasse || this.agent.motDePasse };
    this.api.modifierAgent(this.agent.id, data).subscribe({
      next: (updated) => {
        localStorage.setItem('agent', JSON.stringify(updated));
        this.agent = updated;
        this.modificationMode = false;
      },
      error: () => alert('Erreur modification')
    });
  }

  supprimer() {
    if (!confirm('Supprimer votre compte ?')) return;
    this.api.supprimerAgent(this.agent.id).subscribe({
      next: () => { localStorage.removeItem('agent'); this.router.navigate(['/']); },
      error: () => alert('Erreur suppression')
    });
  }

  deconnecter() {
    localStorage.removeItem('agent');
    this.router.navigate(['/']);
  }
}
