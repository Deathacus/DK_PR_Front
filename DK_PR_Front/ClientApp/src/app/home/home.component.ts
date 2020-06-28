import { Component } from '@angular/core';
import { User } from '../models/user';
import { userService } from '../service/userService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(public logedInUserService: userService) { }

  public logedInUser: User;

  ngOnInit() {
    this.logedInUser = this.logedInUserService.logedInUser;
    console.log("LogedInUser is now: " + this.logedInUserService.logedInUser)
  }

  public userPicked: any;


  public select($event) {
    this.userPicked = $event.emoji;
    console.log($event);
    console.log(this.userPicked);
  }

  public postIt() { }

} 
