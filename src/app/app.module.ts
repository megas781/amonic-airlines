import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// FormsModule must be explicitly imported to use [(ngModel)] and other directives
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { LoginPageComponent } from './general-pages/login-page/login-page.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import {UsersService} from "./users.service";
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './master/not-found-page/not-found-page.component';
import { UserPageComponent } from './user-list-page/user-page/user-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListPageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    //Must be imported to use ngModel
    FormsModule,
    // в параметре метода forRoot декларируем все пути
    RouterModule.forRoot([
      { path: "", component: LoginPageComponent },
      { path: "user_list/:user_id", component: UserListPageComponent },
      { path: "user_list", component: UserListPageComponent },
      { path: "**", component: NotFoundPageComponent},
      // "user"-like links a till generic. The thing is that specific urls must be delcared first
      // { path: "users/:username"},
      // { path: "users"},
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
