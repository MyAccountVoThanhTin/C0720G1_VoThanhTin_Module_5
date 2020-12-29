import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../model/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  @Input()
  student: IStudent;
  constructor() { }

  ngOnInit(): void {
  }
}
