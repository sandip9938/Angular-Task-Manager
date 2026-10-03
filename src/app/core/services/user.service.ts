// User service for handling user-related HTTP requests
import { HttpClient } from '@angular/common/http';

// Injectable decorator marks this class as a service that can be injected into other components or services
import { Injectable, inject } from '@angular/core';

// Observable is used for handling asynchronous data streams, such as HTTP responses
import { Observable } from 'rxjs';

// Import the User model to define the structure of user data
import { User } from '../../features/users/models/user.model';

// The UserService class provides methods to interact with the user API endpoints
@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient); // Inject the HttpClient service for making HTTP requests
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Base URL for the user API (Fake API endpoint for demonstration purposes)

  // Method to fetch the list of users from the API
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Method to fetch a specific user by ID from the API
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
