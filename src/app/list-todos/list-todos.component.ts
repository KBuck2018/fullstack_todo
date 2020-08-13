import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public isDone: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'go to Iceland', false, new Date()),
    new Todo(2, 'learn java', false, new Date()),
    new Todo(3, 'learn angular', false, new Date()),
    new Todo(4, 'learn to dance', false, new Date()),
  ];

  constructor() {}

  ngOnInit(): void {}
}
