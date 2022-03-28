import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
    // return tasks;
  }

  deleteTask(task: Task): Observable<Task> {
    console.log(task);
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task) {
    console.log(task);
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
