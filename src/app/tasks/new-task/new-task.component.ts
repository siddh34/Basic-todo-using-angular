import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  title = signal('');
  summary = signal('');
  dueDate = signal('');
  @Output() close = new EventEmitter<void>();
  // private taskService = inject(TaskService);

  constructor(private taskService: TaskService) {
  }

  onCanceled() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(this.userId, {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    });
    this.close.emit();
  }
}
