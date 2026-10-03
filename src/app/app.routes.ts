import { Routes } from '@angular/router';

export const routes: Routes = [
  // Dashboard route
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard.component').then(
        (module) => module.Dashboard,
      ),
  },
  // Users routes
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/pages/user-list/user-list.component').then(
        (module) => module.UserListPage,
      ),
  },
  // User detail route
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./features/users/pages/user-detail/user-detail.component').then(
        (module) => module.UserDetailPage,
      ),
  },
];
