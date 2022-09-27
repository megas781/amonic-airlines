import {Injectable} from '@angular/core';
import dataA from './mock-data/users.json';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data: Array<User> = [];
  users: Array<any> = [];

  public getUsers(): Array<User> {
    return this.users
  }

  getUserById(id: number): User {
    for (let i = 0; i < this.users.length; i++) {
      if (id == this.users[i].id) {
        return this.users[i];
      }
      
    }
    return null;
  }

  constructor() {

    let fetchedUsers = dataA;

    if (Array.isArray(fetchedUsers)) {
      // console.log('it is array!');

      for (let i = 0; i < fetchedUsers.length; i++) {
        this.users.push(
          new User(fetchedUsers[i])
        )
      }
    }

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
