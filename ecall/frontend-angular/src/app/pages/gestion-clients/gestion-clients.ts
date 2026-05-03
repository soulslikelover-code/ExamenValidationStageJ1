import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gestion-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion-clients.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class GestionClients implements OnInit {
  clients: any[] = [];
  modificationId: number | null = null;
  nom = ''; prenom = ''; email = ''; telephone = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void { this.charger(); }

  charger() {
    this.api.listerClients().subscribe({ next: (d) => this.clients = d, error: () => this.clients = [] });
  }

  editer(client: any) {
    this.modificationId = client.id;
    this.nom = client.nom; this.prenom = client.prenom;
    this.email = client.email; this.telephone = client.telephone;
  }

  modifier() {
    const client = { nom: this.nom, prenom: this.prenom, email: this.email, telephone: this.telephone };
    this.api.modifierClient(this.modificationId!, client).subscribe({ next: () => { this.charger(); this.reset(); }, error: () => alert('Erreur modification') });
  }

  supprimer(id: number) {
    this.api.supprimerClient(id).subscribe({ next: () => this.charger(), error: () => alert('Erreur suppression') });
  }

  reset() {
    this.modificationId = null;
    this.nom = ''; this.prenom = ''; this.email = ''; this.telephone = '';
  }
}
