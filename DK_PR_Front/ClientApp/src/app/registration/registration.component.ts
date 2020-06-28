import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})


export class RegistrationComponent {
  constructor(private router: Router) { }

  public allUsers: User[];
  public userName: string = "";
  public password: string = "";
  public passwordAgain: string = " ";
  public userOkay: boolean = false;

  ngOnInit() {


    let user1: User = new User();

    user1.id = 1;
    user1.name = "Lukas";
    user1.password = "1234!";

    let user2: User = undefined;
    user2.id = 2;
    user2.name = "Sara";
    user2.password = "Sara123$";

    this.allUsers.push(user1);

    this.allUsers.push(user2);
  }


  public checkUserData() {
    let userOkay = false;
    for (let u of this.allUsers) {
      if (this.userName === u.name) {
        alert("Username already exists! Please choose another name");
        this.userName = "";
        this.password = "";
        userOkay = true;
      }
    }
    //if username doesn't already exist check if entered data okay
    if (userOkay) {
      if (this.password.length < 4) {
        this.userName = "";
        this.password = "";
        this.passwordAgain = " ";
        alert('Password must be longer than 3!');
      }

      else if (this.password === this.passwordAgain) {
        //check if this username already exists an trigger alert to inform

        if (this.password === this.userName) {
          this.userName = "";
          this.password = "";
          this.passwordAgain = " ";
          alert('Password and user name must be different!');
        }
        //else create user on data base and set user okay to true
        else {
          console.log("username: " + this.userName);
          console.log("password: " + this.password);
          console.log("passwordCheck: " + this.passwordAgain);
          this.userOkay = true;
          console.log("boolean" + this.userOkay);

          alert('Your user is now registrated!');
          this.router.navigateByUrl('');
        }
      }
      else {
        this.userName = "";
        this.password = "";
        this.passwordAgain = " ";
        alert('Your entered passwords are not the same');
      }
    }

    console.log("name: " + this.userName);
    console.log("password: " + this.password);
  }

}
