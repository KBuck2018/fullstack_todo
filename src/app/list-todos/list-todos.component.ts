import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos = [
    {
      id: 1,
      desc: 'learn to dance',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
