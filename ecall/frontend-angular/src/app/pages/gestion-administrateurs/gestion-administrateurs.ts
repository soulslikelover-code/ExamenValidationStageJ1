import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gestion-administrateurs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion-administrateurs.html',
  styleUrls: ['../../../styles/dashboard.css']
})
export class GestionAdministrateurs implements OnInit {
  administrateurs: any[] = [];
  nom = ''; prenom = ''; email = ''; motDePasse = ''; telephone = '';
  modificationId: number | null = null;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.charger(); }

  charger() {
    this.api.listerAdministrateurs().subscribe({ next: (d) => { this.administrateurs = d; this.cdr.detectChanges(); }, error: () => this.administrateurs = [] });
  }

  ajouter() {
    const admin = { nom: this.nom, prenom: this.prenom, email: this.email, motDePasse: this.motDePasse, telephone: this.telephone };
    if (this.modificationId) {
      this.api.modifierAdministrateur(this.modificationId, admin).subscribe({ next: () => { this.charger(); this.reset(); }, error: () => alert('Erreur modification') });
    } else {
      this.api.ajouterAdministrateur(admin).subscribe({ next: () => { this.charger(); this.reset(); }, error: () => alert('Erreur ajout') });
    }
  }

  editer(admin: any) {
    this.modificationId = admin.id;
    this.nom = admin.nom; this.prenom = admin.prenom;
    this.email = admin.email; this.telephone = admin.telephone;
    this.motDePasse = '';
  }

  supprimer(id: number) {
    this.api.supprimerAdministrateur(id).subscribe({ next: () => this.charger(), error: () => alert('Erreur suppression') });
  }

  reset() {
    this.modificationId = null;
    this.nom = ''; this.prenom = ''; this.email = ''; this.motDePasse = ''; this.telephone = '';
  }
}