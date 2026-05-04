import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gestion-agents',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion-agents.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class GestionAgents implements OnInit {
  agents: any[] = [];
  nom = ''; prenom = ''; email = ''; motDePasse = ''; telephone = '';
  modificationId: number | null = null;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.charger(); }

  charger() {
    this.api.listerAgents().subscribe({ next: (d) => { this.agents = d; this.cdr.detectChanges(); }, error: () => this.agents = [] });
  }

  ajouter() {
    const agent = { nom: this.nom, prenom: this.prenom, email: this.email, motDePasse: this.motDePasse, telephone: this.telephone };
    if (this.modificationId) {
      this.api.modifierAgent(this.modificationId, agent).subscribe({ next: () => { this.charger(); this.reset(); }, error: () => alert('Erreur modification') });
    } else {
      this.api.ajouterAgent(agent).subscribe({ next: () => { this.charger(); this.reset(); }, error: () => alert('Erreur ajout') });
    }
  }

  editer(agent: any) {
    this.modificationId = agent.id;
    this.nom = agent.nom; this.prenom = agent.prenom;
    this.email = agent.email; this.telephone = agent.telephone;
    this.motDePasse = '';
  }

  supprimer(id: number) {
    this.api.supprimerAgent(id).subscribe({ next: () => this.charger(), error: () => alert('Erreur suppression') });
  }

  reset() {
    this.modificationId = null;
    this.nom = ''; this.prenom = ''; this.email = ''; this.motDePasse = ''; this.telephone = '';
  }
}