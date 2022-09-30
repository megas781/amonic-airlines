import { Injectable } from '@angular/core';
import jsonData from '../mock-data/userlog.json';


@Injectable({
  providedIn: 'root'
})
export class UserLogsService {
  userLogs: Array<UserLog> = [];

  constructor() { 
    let fetchedLogs = jsonData;
    // console.log("fetched logs:");
    // console.log(fetchedLogs);

    if (Array.isArray(fetchedLogs)) {

      for (let i = 0; i < fetchedLogs.length; i++) {
        console.log("particular log: ");
        this.userLogs.push(
          new UserLog(fetchedLogs[i])
        )
      }
    }
    console.log("userLogs:")
    console.log(this.userLogs);
  }
  
}

export class UserLog extends Object {
  userId: String;
  logInDatetime: String;
  LogOutDatetime: String;
  errorId: String;
  errorComment: String;

  constructor(jsonData: any) {
    super();
    this.userId = String(jsonData['userID']);
    this.logInDatetime = String(jsonData['loginDateTime']);
    this.LogOutDatetime = String(jsonData['logoutDateTime']);
    this.errorId = String(jsonData['errorID']);
    this.errorComment = String(jsonData['errorComment']);
  }
}