import { Component, OnInit } from '@angular/core';
import {IStudent} from "./model/Student";

@Component({
  selector: 'app-bt-hang-ngay',
  templateUrl: './bt-hang-ngay.component.html',
  styleUrls: ['./bt-hang-ngay.component.scss']
})
export class BtHangNgayComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'Vo Thanh Tin',
    address: 'Quang Ngai',
    age: 23,
    mark: 9,
    avatar: 'https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg'}

  constructor() { }

  ngOnInit(): void {
  }

  updateMark(value: number) {
    this.student.mark = value;
  }

  updateAge(value: number) {
    this.student.age = value;
  }

  updateAddress(value: string) {
    this.student.address = value;
  }
}
