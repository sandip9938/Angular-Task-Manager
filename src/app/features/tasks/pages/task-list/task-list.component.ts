// This file defines the TaskList component, which displays a list of tasks in the Angular Task Manager application.
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

// Import the Task interface from the models directory
import { Task } from '../../models/task.model';

// Import the TaskCard component from the components directory
import { TaskCard } from '../../components/task-card/task-card.component';

// Import the TaskService from the core services directory to manage tasks
import { TaskService } from '../../../../core/services/task.service';

// The TaskList component is decorated with the @Component decorator, which specifies the component's metadata.
@Component({
  imports: [TaskCard, RouterLink],
  selector: 'app-task-list',
  styleUrl: './task-list.component.scss',
  templateUrl: './task-list.component.html',
})

// The TaskList class defines the component's behavior and properties.
export class TaskList {
  // Define a signal to hold the list of tasks

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

  // Inject the TaskService to access the shared task data
  private readonly taskService = inject(TaskService);

  // Use the tasks signal from the TaskService to manage the list of tasks in this component
  protected readonly tasks = this.taskService.tasks;

  // Define a method to delete a task by calling the deleteTask method from the TaskService
  protected deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  // Define a method to mark a task as completed by calling the completeTask method from the TaskService
  protected completeTask(id: number): void {
    this.taskService.completeTask(id);
  }
  // Define signals to hold the search query and status filter for filtering tasks
  protected readonly query = signal('');
  // Define a signal to hold the status filter for filtering tasks based on their status (all, pending, completed)
  protected readonly statusFilter = signal<'all' | Task['status']>('all');

  // Define a computed property to filter tasks based on the search query and status filter
  protected readonly filteredTasks = computed(() => {
    const searchText = this.query().trim().toLowerCase();
    const selectedStatus = this.statusFilter();

    return this.tasks().filter((task) => {
      const matchesSearch = task.title.toLowerCase().includes(searchText);
      const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  });

  // Define a method to handle the search input event and update the query signal
  protected onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.query.set(input.value);
  }

  // Define a method to handle the status filter change event and update the statusFilter signal
  protected onStatusFilterChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.statusFilter.set(select.value as 'all' | Task['status']);
  }

}
