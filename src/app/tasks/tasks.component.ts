import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskService) {
  }

  get getTasks() {
    return this.taskService.getTasks(this.userId);
  }

  onStartAddTasks() {
    this.isAddingTask = true;
  }

  onCloseTasks() {
    this.isAddingTask = false;
  }
}
