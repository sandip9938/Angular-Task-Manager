import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard.component').then(
        (module) => module.Dashboard,
      ),
  },
];
