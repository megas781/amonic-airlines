import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {

  userService: UsersService;

  constructor(users: UsersService) {
    this.userService = users
  }

  ngOnInit(): void {
    console.log("serviced users:")
    console.log(this.userService)
  }

}
