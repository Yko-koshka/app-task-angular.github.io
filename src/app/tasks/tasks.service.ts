import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Fix login bug',
      summary:
        'Investigate and resolve the issue with user login failing intermittently.',
      dueDate: '2024-04-10',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Implement dark mode',
      summary: 'Add a toggle for dark mode with theme persistence.',
      dueDate: '2024-05-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Optimize database queries',
      summary:
        'Improve database performance by indexing frequently queried fields.',
      dueDate: '2024-06-15',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
