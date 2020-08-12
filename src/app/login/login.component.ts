import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  data = {};
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.username === 'sample' && this.password === 'bruh') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    this.data = { username: this.username, password: this.password };
    console.log(this.username, this.password);
    console.log(this.data);
    return this.data;
  }
}
