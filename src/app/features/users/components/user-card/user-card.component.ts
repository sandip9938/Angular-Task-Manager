import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCard {
  readonly user = input.required<User>();

  protected getInitials(): string {
    return this.user()
      .name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('');
  }
}
