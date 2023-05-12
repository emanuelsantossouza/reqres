import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'alterar-usuario/:id',
    loadComponent: () => import('./pages/alterar-usuario/alterar-usuario.page').then( m => m.AlterarUsuarioPage)
  },

];
