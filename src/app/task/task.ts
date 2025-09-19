import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgForOf } from '@angular/common';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    Logo,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    NgForOf,
  ],
  templateUrl: './task.html',
  styleUrls: ['./task.scss'],
})
export class Task {
  taskName: string = '';
  tasksList: string[] = ['task 1', 'task 2'];
  completedTaskList: string[] = [];

  constructor() {
    if (localStorage.getItem('tasks')) {
      const currentTasks = localStorage.getItem('tasks')
      console.log("currentTasks", currentTasks)
      this.tasksList = currentTasks ? JSON.parse(currentTasks) : []
    }
    this.tasksList
  }

  addTask() {
    if (this.taskName.trim()) {
      this.tasksList.push(this.taskName.trim());
      localStorage.setItem('tasks', JSON.stringify(this.tasksList))
      this.taskName = '';
    }
  }

  deleteTask(task: string) {
    this.tasksList = this.tasksList.filter((el) => el !== task);
    this.completedTaskList = this.completedTaskList.filter((el) => el !== task);
    localStorage.setItem('tasks', JSON.stringify(this.tasksList))
  }

  completeTask(task: string) {
    if (!this.completedTaskList.includes(task)) {
      this.completedTaskList.push(task);
    } else {
      this.completedTaskList = this.completedTaskList.filter((el) => el !== task);
    }
  }

  checkStatus(task: string) {
    return this.completedTaskList.includes(task);
  }

  trackTask(index: number, task: string) {
    return task;
  }
}
