import {Injectable} from '@angular/core';
import jsonData from '../mock-data/users.json';
import { HttpClient } from '@angular/common/http'
import * as SERVER from './server-metadata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data: Array<User> = [];
  users: Array<any> = [];

  // public getUsers(): Array<User> {
  //   return this.users
  // }
  public getUsers(): Observable<Object> {
    return this.httpClient.get(SERVER.URL + SERVER.KEYS.USERS,{headers: {}});
  }

  getUserById(id: number): User {
    for (let i = 0; i < this.users.length; i++) {
      if (id == this.users[i].id) {
        return this.users[i];
      }
    }
    return null;
  }

  constructor(private httpClient: HttpClient) {

  }


}

export class User extends Object {
  id: String;
  firstname: String;
  lastname: String;
  age: String;
  officeId: String;
  email: String;
  role: String;
  active: String;

  constructor(jsonObject: any) {
    super();
    this.id = String(jsonObject['ID']);
    this.firstname = String(jsonObject['Firstname']);
    this.lastname = String(jsonObject['Lastname']);
    this.age = String(jsonObject['Birthdate']);
    this.officeId = String(jsonObject['OfficeID']);
    this.email = String(jsonObject['Email']);
    this.role = String(jsonObject['RoleID']);
    this.active = String(jsonObject['Active']);
  }
  override toString(): string {
    return this.firstname + " " + this.lastname
  }
}
