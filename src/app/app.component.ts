// This file defines the main application component for the Angular Task Manager application.
import { Component, signal } from '@angular/core';

// Import the RouterOutlet directive from the Angular router package
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard.component';


// The App component is decorated with the @Component decorator, which specifies the component's metadata.
@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [Dashboard]
})


// The App class defines the component's behavior and properties.
export class App {
  protected readonly title = signal('angular-task-manager');
}
