// This file defines the Task interface used in the Angular Task Manager application.
export interface Task {
  id: number;
  title: string;
  status: 'pending' | 'completed';
}
