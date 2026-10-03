import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { UserService } from '../../../../core/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail-page',
  imports: [RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly userService = inject(UserService);

  protected readonly user = signal<User | null>(null);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);

  constructor() {
    this.loadUser();
  }

  protected getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');
  }

  private loadUser(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    if (!userId) {
      this.isLoading.set(false);
      this.errorMessage.set('User not found.');
      return;
    }

    this.userService.getUserById(userId).subscribe({
      next: (user: User) => {
        this.user.set(user);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Unable to load this user.');
      },
    });
  }
}
