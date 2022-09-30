import {Component, Input, OnInit} from '@angular/core';
import {User, UsersService} from "../data-services/users.service";

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {

  userService: UsersService;
  users: Array<Object> = [];

  constructor(private usersService: UsersService) {
    this.userService = usersService;
    this.userService.getUsers().subscribe(function(res) {
      console.log('ajax response: ')
      console.log(res)
    })
  }

  ngOnInit(): void {
    console.log("serviced users:")
    console.log(this.userService)
  }

  onAddUserButtonClick() {
    
  }
}
