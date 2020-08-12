import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  username = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);
  }
}
