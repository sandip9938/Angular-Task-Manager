import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.component.scss',
  templateUrl: './dashboard.component.html',
})
export class Dashboard {
  private readonly taskService = inject(TaskService);

  protected readonly totalTasks = computed(() => this.taskService.tasks().length);
  protected readonly completedTasks = computed(
    () => this.taskService.tasks().filter((task) => task.status === 'completed').length,
  );
  protected readonly pendingTasks = computed(() =>
    this.taskService
      .tasks()
      .filter((task) => task.status === 'pending')
      .slice(0, 3),
  );
  protected readonly pendingCount = computed(
    () => this.taskService.tasks().filter((task) => task.status === 'pending').length,
  );
}
