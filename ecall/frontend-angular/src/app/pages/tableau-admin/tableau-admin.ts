import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
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

  constructor(private api: ApiService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void { this.charger(); }

  charger() {
    this.api.listerClients().subscribe({ next: (d) => { this.clients = d; this.cdr.detectChanges(); }, error: () => this.clients = [] });
    this.api.listerAgents().subscribe({ next: (d) => { this.agents = d; this.cdr.detectChanges(); }, error: () => this.agents = [] });
    this.api.listerAdministrateurs().subscribe({ next: (d) => { this.administrateurs = d; this.cdr.detectChanges(); }, error: () => this.administrateurs = [] });
  }

  supprimerClient(id: number) {
    this.api.supprimerClient(id).subscribe({ next: () => this.charger(), error: () => alert('Erreur suppression') });
  }

  deconnecter() {
    localStorage.removeItem('admin');
    this.router.navigate(['/admin/connexion']);
  }
}