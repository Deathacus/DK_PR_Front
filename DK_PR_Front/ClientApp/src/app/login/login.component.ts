import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { userService } from '../service/userService';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})


export class LoginComponent implements OnInit {
  constructor(private router: Router, public logedInUser: userService) { }

  public allUsers: User[] = [];
  public userName: string = "";
  public password: string = "";



  ngOnInit() {
    this.userName = "";
    this.password = "";

    let user1: User = new User();

    user1.setUser(1, "Lukas", "1234!");

    //user1.id = 1;
    //user1.name = "Lukas";
    //user1.password = "1234!";

    let user2: User = new User();
    user2.id = 2;
    user2.name = "Sara";
    user2.password = "Sara123$";

    this.allUsers.push(user1);
    this.allUsers.push(user2);
    console.log(this.allUsers);
    
  }


  public checkUserData() {
    let userExists = false;
    console.log(this.allUsers);

    for (let u of this.allUsers) {
      if (u.name === this.userName) {
        if (this.password === u.password) {
          this.logedInUser.logedInUser= u;
          userExists = true;
          alert("Loged in succesfully!");
          this.router.navigateByUrl('');
          break;
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
