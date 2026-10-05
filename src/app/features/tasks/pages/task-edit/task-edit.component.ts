import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../../../core/services/task.service';

// The TaskEdit component is responsible for editing an existing task in the Angular Task Manager application.
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-task-edit',
  styleUrl: './task-edit.component.scss',
  templateUrl: './task-edit.component.html',
})
// The TaskEdit class defines the component's behavior and properties for editing a task.
export class TaskEdit {
  // Injecting necessary services and modules for form handling, routing, and task management
  private readonly formBuilder = inject(FormBuilder);
  // Injecting the TaskService to manage tasks and perform operations like fetching and updating tasks
  private readonly taskService = inject(TaskService);
  // Injecting the Router to navigate between routes after task editing
  private readonly router = inject(Router);
  // Injecting the ActivatedRoute to access route parameters, specifically the task ID for editing
  private readonly route = inject(ActivatedRoute);
  // Retrieving the task ID from the route parameters and converting it to a number for further processing
  private readonly taskId = Number(this.route.snapshot.paramMap.get('id'));

  // Defining a reactive form for task editing with validation rules for the title field
  protected readonly form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/\S/)]],
  });

  // The constructor initializes the component and pre-fills the form with the existing task data based on the task ID. If the task is not found, it navigates back to the task list.
  constructor() {
    const task = this.taskService.getTaskById(this.taskId);
    if (!task) {
      void this.router.navigate(['/tasks']);
      return;
    }
    this.form.patchValue({ title: task.title });
  }
  // The submit method handles the form submission for editing a task. It checks if the form is valid, updates the task using the TaskService, and navigates back to the task list.
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.taskService.updateTask(this.taskId, this.form.controls.title.value.trim());
    void this.router.navigate(['/tasks']);
  }
}
