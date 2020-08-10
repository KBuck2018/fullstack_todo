import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() number: number;
  @Input() decimal: number;
  constructor() {}

  ngOnInit(): void {}
}
