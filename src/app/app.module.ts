import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminMainPageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
