import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';





@Injectable()
export class UserService
{
  constructor(private http: HttpClient) { }

  public logedInUser: User;
  public wantToFollow: User;

  public getAllUsers() {
    return this.http.get<User[]>('api/user');
  }

  public createUser(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post<User>('api/user', user)
        .toPromise().then(result => resolve(true))
        .catch(reason => reject(reason));
    });
    
  }

  public followUser(user: User[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post<User>('api/user/followUser', user)
        .toPromise().then(result => resolve(true))
        .catch(reason => reject(reason));
    });
  }

  public unFollowUser(user: User[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post<User>('api/user/unFollowUser', user)
        .toPromise().then(result => resolve(true))
        .catch(reason => reject(reason));
    });
  }

  public getFollowers(user: User) {
    return this.http.get<User[]>('api/user/getFollowers/' + user);
  }



}

