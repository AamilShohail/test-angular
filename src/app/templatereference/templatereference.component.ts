import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css'],
})
export class TemplatereferenceComponent implements OnInit {
  public greetMessage = '';
  constructor() {}

  ngOnInit(): void {}
  logMessage(value: any) {
    this.greetMessage = value.value;
    this.greetMessage = `Welcome ${this.greetMessage}`;
  }
}
