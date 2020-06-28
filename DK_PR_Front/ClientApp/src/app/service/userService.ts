import { User } from "../models/user";
import { Injectable } from "@angular/core";



@Injectable()
export class userService
{
  constructor() { }

  public logedInUser: User;

}

