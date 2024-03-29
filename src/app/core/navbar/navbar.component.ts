import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() navbarTitle = '';
  @Input() iconName = '';

  constructor() {}

  ngOnInit(): void {}

  onValueChange(value: string) {
    console.log('InputValue:', value);
  }
}
