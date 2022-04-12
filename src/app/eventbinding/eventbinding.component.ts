import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css'],
})
export class EventbindingComponent implements OnInit {
  constructor() {}
  public message = '';
  ngOnInit(): void {}
  ClickMe(event: any) {
    console.log('clicked me');
    console.log(`Your time Stamp is ${event.timeStamp}`);
    this.message = `Your time Stamp is ${event.timeStamp}`;
  }
}
