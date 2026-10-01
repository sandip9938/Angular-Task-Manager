import { Component } from '@angular/core';
import { TaskList } from '../../../tasks/pages/task-list/task-list.component';

@Component({
  imports: [TaskList],
  selector: 'app-dashboard',
  styleUrl: './dashboard.component.scss',
  templateUrl: './dashboard.component.html',
})
export class Dashboard {}
