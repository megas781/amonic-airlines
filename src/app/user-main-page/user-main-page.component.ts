import { Component, OnInit } from '@angular/core';
import { UserLogsService } from '../data-services/user-logs.service';
import { UsersService } from '../data-services/users.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  constructor(
    private userLogService: UserLogsService,
    private userSerivce: UsersService) { 
      
    }

  ngOnInit(): void {
  }

}
