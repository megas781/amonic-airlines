import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, FormControl } from '@angular/forms';
import { User, UsersService } from '../../data-services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  veryImpressivePrint = "Very impressive";
  k = 0;
  users;

  constructor(userService: UsersService) { 
    this.users = userService.getUsers();
  }

  ngOnInit(): void {
    
  }

  onLoginSubmit(loginForm: NgForm) {
    console.log(loginForm.valid)
  }
  onClickButton(theEmailInput: NgModel) {
    console.log(theEmailInput);
  }
}
