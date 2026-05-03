import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { InscriptionClient } from './pages/inscription-client/inscription-client';
import { ConnexionClient } from './pages/connexion-client/connexion-client';
import { TableauClient } from './pages/tableau-client/tableau-client';
import { ConnexionAdmin } from './pages/connexion-admin/connexion-admin';
import { TableauAdmin } from './pages/tableau-admin/tableau-admin';
import { ConnexionAgent } from './pages/connexion-agent/connexion-agent';
import { TableauAgent } from './pages/tableau-agent/tableau-agent';
import { GestionAgents } from './pages/gestion-agents/gestion-agents';
import { GestionAdministrateurs } from './pages/gestion-administrateurs/gestion-administrateurs';
import { GestionClients } from './pages/gestion-clients/gestion-clients';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'inscription', component: InscriptionClient },
  { path: 'connexion', component: ConnexionClient },
  { path: 'client', component: TableauClient },
  { path: 'admin/connexion', component: ConnexionAdmin },
  { path: 'admin', component: TableauAdmin },
  { path: 'admin/agents', component: GestionAgents },
  { path: 'admin/administrateurs', component: GestionAdministrateurs },
  { path: 'admin/clients', component: GestionClients },
  { path: 'agent/connexion', component: ConnexionAgent },
  { path: 'agent', component: TableauAgent }
];