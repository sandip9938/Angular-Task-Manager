// This file defines the Task interface used in the Angular Task Manager application.
export const TASK_CATEGORIES = ['Work', 'Study', 'Personal'] as const;

export type TaskCategory = (typeof TASK_CATEGORIES)[number];

export function isTaskCategory(value: string | null): value is TaskCategory {
  return TASK_CATEGORIES.some((category) => category === value);
}

export interface Task {
  id: number;
  title: string;
  status: 'pending' | 'completed';
  category: TaskCategory;
}
