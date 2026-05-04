import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-appels-agent',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appels-agent.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class AppelsAgent implements OnInit {
  appels: any[] = [];
  agent: any = null;

  constructor(private api: ApiService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const data = localStorage.getItem('agent');
    if (!data) { this.router.navigate(['/agent/connexion']); return; }
    this.agent = JSON.parse(data);
    this.charger();
  }

  charger() {
    this.api.listerAppels().subscribe({
      next: (data) => { this.appels = data; this.cdr.detectChanges(); },
      error: () => this.appels = []
    });
  }

  changerStatut(id: number, statut: string) {
    this.api.changerStatutAppel(id, statut).subscribe({
      next: () => this.charger(),
      error: () => alert('Erreur changement statut')
    });
  }

  deconnecter() {
    localStorage.removeItem('agent');
    this.router.navigate(['/']);
  }
}