import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';




@Injectable()
export class UserService
{
  constructor(private http: HttpClient) { }

  public logedInUser: User;

  public getAllUsers() {
    return this.http.get<User[]>('api/user');
  }

  public createUser(user: User) {
    
    this.http.post<User>('api/user', user);
  }



}

