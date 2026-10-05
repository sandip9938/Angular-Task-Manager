// This file is part of the Angular Task Manager project.
import { Injectable, signal } from '@angular/core';

// Import the Task interface from the models directory to define the structure of tasks.
import { Task } from '../../features/tasks/models/task.model';

// The TaskService class is decorated with @Injectable, making it available for dependency injection throughout the application.
@Injectable({ providedIn: 'root' })
export class TaskService {
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Read emails', status: 'pending' },
    { id: 2, title: 'Plan the day', status: 'completed' },
    { id: 3, title: 'Review notes', status: 'pending' },
    { id: 4, title: 'Update report', status: 'completed' },
    { id: 5, title: 'Prepare meeting', status: 'pending' },
  ]);

  // The addTask method allows adding a new task to the list. It takes a title as an argument, generates a unique ID for the new task, and updates the tasks signal with the new task.
  addTask(tittle: string): void {
    this.tasks.update((currentTasks) => {
      const nextId = Math.max(0, ...currentTasks.map((task) => task.id)) + 1;
      return [...currentTasks, { id: nextId, title: tittle, status: 'pending' }];
    });
  }

  // The getTaskById method retrieves a task from the list based on its ID. It returns the task if found, or undefined if no task with the specified ID exists.
  getTaskById(id: number): Task | undefined {
    return this.tasks().find((task) => task.id === id);
  }

  // The updateTask method allows updating an existing task in the list. It takes a task object as an argument and updates the corresponding task in the tasks signal based on its ID.
  updateTask(id: number, tittle: string): void {
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, title: tittle } : task)),
    );
  }

  // The deleteTask method allows removing a task from the list based on its ID. It updates the tasks signal by filtering out the task with the specified ID.
  deleteTask(id: number): void {
    this.tasks.update((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  // The completeTask method allows marking a task as completed based on its ID. It updates the tasks signal by changing the status of the task with the specified ID to 'completed'.
  completeTask(id: number): void {
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, status: 'completed' } : task)),
    );
  }
}
