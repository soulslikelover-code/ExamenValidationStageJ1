import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-appels-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appels-admin.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class AppelsAdmin implements OnInit {
  appels: any[] = [];

  constructor(private api: ApiService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.charger(); }

  charger() {
    this.api.listerAppels().subscribe({
      next: (data) => { this.appels = data; this.cdr.detectChanges(); },
      error: () => this.appels = []
    });
  }

  get nbTermine(): number { return this.appels.filter(a => a.statut === 'TERMINE').length; }
  get nbEnCours(): number { return this.appels.filter(a => a.statut === 'EN_COURS').length; }
  get nbEnAttente(): number { return this.appels.filter(a => a.statut === 'EN_ATTENTE').length; }
}