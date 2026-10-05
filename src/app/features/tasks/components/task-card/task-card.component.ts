// This file defines the TaskCard component used in the Angular Task Manager application.
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

// Import the Task interface from the models directory
import { Task } from '../../models/task.model';

// The TaskCard component is decorated with the @Component decorator, which specifies the component's metadata.
@Component({
  imports: [RouterLink],
  selector: 'app-task-card',
  styleUrl: './task-card.component.scss',
  templateUrl: './task-card.component.html',
})

// The TaskCard class defines the component's behavior and properties.
export class TaskCard {
  // Define an input property to receive a Task object from the parent component
  readonly task = input.required<Task>();

  // Define an output property to emit an event when the task is deleted
  readonly deleteTask = output<number>();

  // Define an output property to emit an event when the task is marked as completed
  readonly completeTask = output<number>();
}
