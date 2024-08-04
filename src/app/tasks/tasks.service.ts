import { Injectable } from "@angular/core";
import { dummyTasks } from "./dummy_tasks";
import { CreateTask } from "./new-task/new-task.model";
import { Task } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = dummyTasks;

  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  completeTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  addTask(userId: string, taskData: CreateTask): void {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }
}
