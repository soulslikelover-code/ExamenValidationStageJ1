import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableau-client',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tableau-client.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class TableauClient {
  lancerAppel() {
    alert('Fonctionnalité à venir');
  }
}
