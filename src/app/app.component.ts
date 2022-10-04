import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './data-services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amonic-airlines';
  constructor (
    private loginService: LoginService,
    private route: ActivatedRoute
    ) {
      
  }
}
