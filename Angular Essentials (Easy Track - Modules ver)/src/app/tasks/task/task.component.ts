import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
