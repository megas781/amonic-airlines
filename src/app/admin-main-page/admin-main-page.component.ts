import {Component, Input, OnInit} from '@angular/core';
import data from '../data.json';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  users = data['Users']

  constructor() { }

  ngOnInit(): void {
    console.log(this.users)
  }

}
