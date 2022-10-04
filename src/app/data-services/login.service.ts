import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authedUserId: number = null;
  


  constructor() { }
}
