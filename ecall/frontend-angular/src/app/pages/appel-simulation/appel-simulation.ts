import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-appel-simulation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appel-simulation.html',
  styleUrls: ['./appel-simulation.css']
})
export class AppelSimulation implements OnInit, OnDestroy {
  duree = 0;
  interval: any = null;
  statut: 'en_cours' | 'termine' = 'en_cours';
  client: any = null;
  appelId: number | null = null;

  constructor(
    private api: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const data = localStorage.getItem('client');
    if (data) this.client = JSON.parse(data);

    const appel = { clientId: this.client?.id || null, description: 'Appel simulé' };
    this.api.lancerAppel(appel).subscribe({
      next: (res) => this.appelId = res.id,
      error: () => {}
    });

    this.interval = setInterval(() => {
      this.duree++;
      this.cdr.detectChanges();
    }, 1000);
  }

  get dureeFormatee(): string {
    const m = Math.floor(this.duree / 60).toString().padStart(2, '0');
    const s = (this.duree % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  raccrocher(): void {
    clearInterval(this.interval);
    this.statut = 'termine';
    if (this.appelId) {
      this.api.changerStatutAppel(this.appelId, 'TERMINE').subscribe();
    }
    setTimeout(() => this.router.navigate(['/client']), 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}