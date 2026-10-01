// This file defines the TaskList component, which displays a list of tasks in the Angular Task Manager application.
import { Component, computed, signal } from '@angular/core';

// Import the Task interface from the models directory
import { Task } from '../../models/task.model';

// Import the TaskCard component from the components directory
import { TaskCard } from '../../components/task-card/task-card.component';

// The TaskList component is decorated with the @Component decorator, which specifies the component's metadata.
@Component({
  imports: [TaskCard],
  selector: 'app-task-list',
  styleUrl: './task-list.component.scss',
  templateUrl: './task-list.component.html',
})

// The TaskList class defines the component's behavior and properties.
export class TaskList {
  // Define a signal to hold the list of tasks
  protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Read emails', status: 'pending' },
    { id: 2, title: 'Plan the day', status: 'completed' },
    { id: 3, title: 'Review notes', status: 'pending' },
    { id: 4, title: 'Update report', status: 'completed' },
    { id: 5, title: 'Prepare meeting', status: 'pending' },
  ]);

  // Define a method to remove a task from the list based on its ID
  removeTask(id: number): void {
    this.tasks.update((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  // Define computed properties to calculate the total number of tasks, completed tasks, and pending tasks
  protected readonly tottaltasks = computed(() => this.tasks().length);

  // Define a computed property to calculate the number of completed tasks
  protected readonly completedtasks = computed(
    () => this.tasks().filter((task) => task.status === 'completed').length,
  );

  // Define a computed property to calculate the number of pending tasks
  protected readonly pendingtasks = computed(
    () => this.tasks().filter((task) => task.status === 'pending').length,
  );
}
