import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.username === 'sample' && this.password === 'bruh') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    this.data = { username: this.username, password: this.password };
    console.log(this.username, this.password);
    console.log(this.data);
    return this.data;
  }
}
