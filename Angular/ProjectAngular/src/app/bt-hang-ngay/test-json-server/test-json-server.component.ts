import { Component, OnInit } from '@angular/core';
import {UsersService} from './service/UsersService';
import {User} from './model/User';

@Component({
  selector: 'app-test-json-server',
  templateUrl: './test-json-server.component.html',
  styleUrls: ['./test-json-server.component.scss'],
  providers: [UsersService]
})
export class TestJsonServerComponent implements OnInit {
  userList: User[];
  constructor(
    private usersService: UsersService,
  ) {
    this.usersService.getAll().toPromise().then(data => {
      this.userList = data
    })
  }

  ngOnInit(): void {
  }

}
