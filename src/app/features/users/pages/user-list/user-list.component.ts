import { Component, computed, inject, signal } from '@angular/core';

import { UserService } from '../../../../core/services/user.service';
import { UserCard } from '../../components/user-card/user-card.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list-page',
  imports: [UserCard],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListPage {
  private readonly userService = inject(UserService);

  protected readonly users = signal<User[]>([]);
  protected readonly query = signal('');
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly filteredUsers = computed(() => {
    const value = this.query().trim().toLowerCase();

    if (!value) {
      return this.users();
    }

    return this.users().filter((user) => user.name.toLowerCase().includes(value));
  });

  constructor() {
    this.loadUsers();
  }

  protected onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
  }

  protected refreshUsers(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users.set(users);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Unable to load users. Please try again later.');
      },
    });
  }
}
