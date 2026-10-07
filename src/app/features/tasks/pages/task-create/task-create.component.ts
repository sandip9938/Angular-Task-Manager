import { inject, Component } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { isTaskCategory } from '../../models/task.model';

@Component({
  selector: 'app-task-create',
  imports: [ReactiveFormsModule, RouterLink],
  styleUrl: './task-create.component.scss',
  templateUrl: './task-create.component.html',
})
export class TaskCreate {
  //FormBuilder instance to create a reactive form for task creation
  private readonly formBuilder = inject(FormBuilder);

  //TaskService instance to manage tasks
  private readonly taskService = inject(TaskService);

  //Router instance to navigate between routes
  private readonly router = inject(Router);

  //Reactive form for task creation with validation
  protected readonly form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/\S/)]],
    category: ['', Validators.required],
  });

  //submit method to handle form submission and add a new task
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const category = this.form.controls.category.value;
    if (!isTaskCategory(category)) {
      this.form.controls.category.markAsTouched();
      return;
    }
    this.taskService.addTask(this.form.controls.title.value.trim(), category);
    void this.router.navigate(['/tasks']);
  }
}
