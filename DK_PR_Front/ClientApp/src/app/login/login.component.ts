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
    });
    
  }


  public checkUserData() {
    let count: number = 0;
    for (let u of this.allUsers) {
      count++;
      if (u.username === this.userName) {
        if (this.password === u.password) {
          this.userService.logedInUser = u;
          alert("Login in succesfully!");
          this.router.navigateByUrl('');
          break;
        }
        else {
          alert('Password is not correct!');
          break;
        }
      }
      else if (this.allUsers.length === count)
        alert('Sorry this user does not exist!');
    }
    this.password = "";
    this.userName = "";
  }

}
