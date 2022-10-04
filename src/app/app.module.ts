import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// FormsModule must be explicitly imported to use [(ngModel)] and other directives
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

//gleb core
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { LoginPageComponent } from './general-pages/login-page/login-page.component';
import { NotFoundPageComponent } from './general-pages/not-found-page/not-found-page.component';

//services
import {UsersService} from "./data-services/users.service";
import { LoginService } from "./data-services/login.service";
import { UserLogsService } from "./data-services/user-logs.service";

//userList block
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserPageComponent } from './user-list-page/user-page/user-page.component';
import { InOutLogTableComponent } from './user-main-page/in-out-log-table/in-out-log-table.component';
//user log list in this page
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
//flight list
import { FlightListPageComponent } from './flight-list-page/flight-list-page.component';
//flight search section
import { FlightSearchPageComponent } from './flight-search-page/flight-search-page.component';
import { BookingConfirmPageComponent } from './flight-search-page/booking-confirm-page/booking-confirm-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListPageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    UserPageComponent,
    UserMainPageComponent,
    FlightListPageComponent,
    InOutLogTableComponent,
    FlightSearchPageComponent,
    BookingConfirmPageComponent
  ],
  imports: [
    BrowserModule,
    //Must be imported to use ngModel
    FormsModule,
    // HttpClientModule импортируем, чтобы пользоваться встроенным HttpClient для ajax-запросов
    HttpClientModule,
    // в параметре метода forRoot декларируем все пути
    RouterModule.forRoot([
      { path: "", component: LoginPageComponent },
      // specific urls must be delcared first
      { path: "user_list/:user_id", component: UserPageComponent },
      { path: "user_list", component: UserListPageComponent },
      //flight list
      { path: "flight_list", component: FlightListPageComponent },
      //search section
      { path: "flight_search", component: FlightSearchPageComponent },
      { path: "flight_search/booking_confirm", component: BookingConfirmPageComponent },
      //user main
      { path: "user_main", component: UserMainPageComponent },
      //must be the last for 404
      { path: "**", component: NotFoundPageComponent},
    ])
  ],
  providers: [
    UsersService, 
    LoginService,
    UserLogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
