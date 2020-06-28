import { Component } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor() {}

  public logedInUser: User = undefined;

  public userPicked: any;


  public select($event) {
    this.userPicked = $event.emoji;
    console.log($event);
    console.log(this.userPicked);
  }

  public postIt() { }

} //Hallo Luki
