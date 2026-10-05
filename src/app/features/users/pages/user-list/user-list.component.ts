// This component is responsible for displaying a list of users and providing search functionality to filter the list based on user input. It uses signals to manage state and computed signals to derive filtered data based on the search query.
import { Component, computed, inject, signal } from '@angular/core';


// Import the UserService to fetch user data from the API, UserCard component to display individual user information, and User model to define the structure of user data
import { UserService } from '../../../../core/services/user.service';

// Import the UserCard component to display individual user information and the User model to define the structure of user data
import { UserCard } from '../../components/user-card/user-card.component';

// Import the User model to define the structure of user data
import { User } from '../../models/user.model';


// Define the UserListPage component with its selector, template, and styles
@Component({
  selector: 'app-user-list-page',
  imports: [UserCard],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListPage {
  private readonly userService = inject(UserService);// Inject the UserService to fetch user data from the API

  protected readonly users = signal<User[]>([]); // Signal to hold the list of users fetched from the API
  protected readonly query = signal(''); // Signal to hold the search query entered by the user
  protected readonly isLoading = signal(true);// Signal to indicate whether the user data is currently being loaded from the API
  protected readonly errorMessage = signal<string | null>(null);// Signal to hold any error message that may occur during the API request

  // Computed signal to filter the list of users based on the search query entered by the user
  protected readonly filteredUsers = computed(() => {
    const value = this.query().trim().toLowerCase();

    if (!value) {
      return this.users();
    }

    return this.users().filter((user) => user.name.toLowerCase().includes(value));
  });

  // Constructor to initialize the component and load the list of users from the API
  constructor() {
    this.loadUsers();
  }

  // Method to handle the search input event and update the search query signal
  protected onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
  }

  // Method to refresh the list of users by reloading the data from the API
  protected refreshUsers(): void {
    this.loadUsers();
  }

  // Private method to load the list of users from the API using the UserService
  private loadUsers(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    // Subscribe to the getUsers() method of the UserService to fetch the list of users
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users.set(users);
        this.isLoading.set(false);
      },

      // Handle any errors that may occur during the API request and set the error message signal
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Unable to load users. Please try again later.');
      },
    });
  }
}
