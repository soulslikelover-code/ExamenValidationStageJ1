import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tableau-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tableau-admin.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class TableauAdmin implements OnInit {
  clients: any[] = [];
  agents: any[] = [];
  administrateurs: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void { this.charger(); }

  charger() {
    this.api.listerClients().subscribe({ next: (d) => this.clients = d, error: () => this.clients = [] });
    this.api.listerAgents().subscribe({ next: (d) => this.agents = d, error: () => this.agents = [] });
    this.api.listerAdministrateurs().subscribe({ next: (d) => this.administrateurs = d, error: () => this.administrateurs = [] });
  }

  supprimerClient(id: number) {
    this.api.supprimerClient(id).subscribe({ next: () => this.charger(), error: () => alert('Erreur suppression') });
  }
}
