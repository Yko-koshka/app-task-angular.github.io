import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  tasks = [
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

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompletedTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}
