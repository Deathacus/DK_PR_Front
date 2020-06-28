import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})


export class LoginComponent implements OnInit {
  constructor() { }

  public allUsers: User[] = [];
  public userName: string = "";
  public password: string = "";

  public logedInUser: User = undefined;


  ngOnInit() {
    console.log("Start");
    let user1: User;

    user1.setUser(1, "Lukas", "1234!");

    //user1.id = 1;
    //user1.name = "Lukas";
    //user1.password = "1234!";

    //let user2: User = undefined;
    //user2.id = 2;
    //user2.name = "Sara";
    //user2.password = "Sara123$";

    //this.allUsers.push(user1);
    //this.allUsers.push(user2);
    //console.log(this.allUsers);
    
  }


  public checkUserData() {
    let userExists = false;

    console.log("I was here 1");
    console.log(this.allUsers);

    for (let u of this.allUsers) {
      console.log("I was here 2");
      if (u.name === this.userName) {
        console.log("I was here 3");
        if (this.password === u.password) {
          console.log("I was here 4");
          this.logedInUser = u;
          userExists = true;
          alert("Loged in succesfully!");
        }
        else {
          this.password = "";
          this.userName = "";
          userExists = true;
          alert('Password is not correct!');
        }
      }
      else {
        alert('Sorry this user does not exist!');
      }
    }
  }

}
