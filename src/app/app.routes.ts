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
  // Tasks route
  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/tasks/pages/task-list/task-list.component').then(
        (module) => module.TaskList,
      ),
  },
  // New task route
  {
    path: 'tasks/new',
    loadComponent: () =>
      import('./features/tasks/pages/task-create/task-create.component').then(
        (module) => module.TaskCreate,
      ),
  },
  //Task edit route
  {
    path: 'tasks/:id/edit',
    loadComponent: () =>
      import('./features/tasks/pages/task-edit/task-edit.component').then(
        (module) => module.TaskEdit,
      ),
  },
  // Task Delete route
  {
    path: 'tasks/:id',
    loadComponent: () =>
      import('./features/tasks/pages/task-list/task-list.component').then(
        (module) => module.TaskList,
      ),
  },
];
