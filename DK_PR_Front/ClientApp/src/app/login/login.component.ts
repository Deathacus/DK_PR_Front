import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})


export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }

  public allUsers: User[] = [];
  public logedInUser: User;
  public userName: string = "";
  public password: string = "";



  ngOnInit() {
    this.userName = "";
    this.password = "";
    

    this.userService.getAllUsers().toPromise().then(u => {
      this.allUsers = u;
      console.log(this.allUsers.length);
    });

    console.log(this.allUsers.length);
    
  }


  public checkUserData() {
    console.log(this.allUsers);

    for (let u of this.allUsers) {
      console.log("Eingabe: " + this.userName);
      console.log("Eingabe: " + this.password);
      console.log("ArrayName: " + u.username);
      console.log("ArrayPw: " + u.password);
      if (u.username === this.userName) {
        if (this.password === u.password) {
          this.userService.logedInUser = u;
          console.log("eingeloggt ist: " + this.userService.logedInUser);
          alert("Login in succesfully!");
          this.router.navigateByUrl('');
          break;
        }
        else {
          alert('Password is not correct!');
          break;
        }
      }
      else {
        alert('Sorry this user does not exist!');
      }
    }
    console.log(this.userName);
    console.log(this.password);
    this.password = "";
    this.userName = "";
  }

}
