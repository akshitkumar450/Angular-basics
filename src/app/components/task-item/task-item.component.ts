import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;

  // for sending this to parent
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    // console.log(task);
    // sending to parent
    this.onDeleteTask.emit(task);
  }

  onToggleTask(task: any) {
    // console.log('clcik', task.id);
    this.onToggleReminder.emit(task);
  }
}
