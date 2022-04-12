import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properbind',
  templateUrl: './properbind.component.html',
  styleUrls: ['./properbind.component.css'],
})
export class ProperbindComponent implements OnInit {
  constructor() {}

  public myId = 'myId1995';
  public isDisabled = true;

  ngOnInit(): void {}
}
