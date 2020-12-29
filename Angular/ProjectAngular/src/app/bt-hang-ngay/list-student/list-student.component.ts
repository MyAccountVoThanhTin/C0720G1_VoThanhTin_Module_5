import { Component, OnInit } from '@angular/core';
import {IStudent} from '../model/Student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  listStudents: IStudent[] = [
    {id: 1 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 6},
    {id: 2 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 5},
    {id: 3 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 4},
    {id: 4 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 3},
    {id: 5 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 7},
    {id: 6 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 8},
    {id: 7 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 9},
    {id: 8 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 10},
    {id: 9 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 5},
    {id: 10 , name: 'Vo Thanh Tin' , age: 23 , avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg' , address: 'Quang Ngai' , mark: 2},
  ]
  studentDetails: IStudent;
  constructor() { }

  ngOnInit(): void {
  }

  getStudentDetails(student: IStudent) {
    this.studentDetails = student;
  }
}
