import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css'],
})
export class ClassbindingComponent implements OnInit {
  public name = 'aamil shohail';
  public myClass = 'this is an angular test example';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  constructor() {}

  ngOnInit(): void {}
}
