import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: any;
  day: any;
  reminder: any = false;

  // for parent component
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('please add text');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // console.log(this.text, this.day, this.reminder);
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = '';
  }
}
