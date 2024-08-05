import { Component, Input,  } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private taskService: TaskService) {
  }

  onCompleteTaskClick() {
    this.taskService.completeTask(this.task.id);
  }
}
