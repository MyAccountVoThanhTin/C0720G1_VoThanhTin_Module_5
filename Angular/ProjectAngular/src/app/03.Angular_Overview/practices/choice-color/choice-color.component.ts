import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice-color',
  templateUrl: './choice-color.component.html',
  styleUrls: ['./choice-color.component.scss']
})
export class ChoiceColorComponent implements OnInit {
  background = '#00e067';
  onChange(value) {
    this.background = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
