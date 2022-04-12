import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css'],
})
export class StylebindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
}
