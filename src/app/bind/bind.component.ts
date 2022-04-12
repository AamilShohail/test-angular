import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  template: `
    <h2>Hello World {{ name }}</h2>
    <h3>{{ greetUser() }}</h3>
    <h4>{{ siteUrl }}</h4>
  `,
  styleUrls: ['./bind.component.css'],
})
export class BindComponent implements OnInit {
  public name = 'this is bind component';
  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'greetUser ' + this.name;
  }
}
