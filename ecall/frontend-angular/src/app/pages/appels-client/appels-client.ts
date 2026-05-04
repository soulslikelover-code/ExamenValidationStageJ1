import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-appels-client',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appels-client.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class AppelsClient implements OnInit {
  appels: any[] = [];
  client: any = null;

  constructor(
    private api: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const data = localStorage.getItem('client');
    if (!data) { this.router.navigate(['/connexion']); return; }
    this.client = JSON.parse(data);
    this.charger();
  }

  charger() {
    this.api.listerAppels().subscribe({
      next: (data) => {
        this.appels = data.filter((a: any) => a.clientId == this.client.id);
        this.cdr.detectChanges();
      },
      error: () => this.appels = []
    });
  }
}