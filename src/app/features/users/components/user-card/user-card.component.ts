// This component is responsible for displaying a list of users and providing search functionality to filter the list based on user input. It uses signals to manage state and computed signals to derive filtered data based on the search query.
import { Component, input } from '@angular/core';

// Import the RouterLink directive to enable navigation to user details pages when a user card is clicked
import { RouterLink } from '@angular/router';


// Import the User model to define the structure of user data
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCard {
  readonly user = input.required<User>(); // Input property to receive the user data to be displayed in the card

  // Method to extract the initials from the user's name for display in the user card
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
