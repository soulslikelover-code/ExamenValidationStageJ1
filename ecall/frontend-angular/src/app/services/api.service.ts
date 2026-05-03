import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  connexionClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/connexion/client`, data);
  }

  connexionAdmin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/connexion/admin`, data);
  }

  connexionAgent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/connexion/agent`, data);
  }

  inscrireClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clients/inscription`, data);
  }

  listerClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients`);
  }

  listerAgents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/agents`);
  }

  listerAdministrateurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/administrateurs`);
  }

  ajouterAgent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agents`, data);
  }

  ajouterAdministrateur(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/administrateurs`, data);
  }

  modifierClient(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/clients/${id}`, data);
  }

  supprimerClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clients/${id}`);
  }

  modifierAgent(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/agents/${id}`, data);
  }

  supprimerAgent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/agents/${id}`);
  }

  modifierAdministrateur(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/administrateurs/${id}`, data);
  }

  supprimerAdministrateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/administrateurs/${id}`);
  }

  lancerAppel(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appels`, data);
  }

  listerAppels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/appels`);
  }
}
