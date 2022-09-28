import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from 'src/app/data-services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  theUser: User;
  //Here in constructor params we declare. Here with "route" property we can access url-params
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService) { 
    
  }

  ngOnInit(): void {
    //
    let userId = this.route.snapshot.params['user_id'];
    this.theUser = this.userService.getUserById(userId);
  }

}
