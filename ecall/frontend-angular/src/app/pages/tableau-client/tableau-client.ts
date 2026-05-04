import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-tableau-client',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tableau-client.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class TableauClient implements OnInit {
  client: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('client');
    if (data) this.client = JSON.parse(data);
  }

  lancerAppel(): void {
    this.router.navigate(['/client/appel']);
  }
}
