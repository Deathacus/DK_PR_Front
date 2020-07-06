import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../service/user.service';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})


export class RegistrationComponent {
  constructor(private router: Router, private userService: UserService ) { }

  public allUsers: User[] = [];
  public userName: string = "";
  public password: string = "";
  public passwordAgain: string = "";
  public userOkay: boolean = false;
  public newUser: User = new User();

  ngOnInit() {
    this.userName = "";
    this.password = "";
    this.passwordAgain = "";

    this.userService.getAllUsers().toPromise().then(u => {
      this.allUsers = u;
    });
  }


  public checkUserData() {
    let userOkay = true;

    for (let u of this.allUsers) {
      if (this.userName === u.username) {
        alert("Username already exists! Please choose another name");
        this.userName = "";
        this.password = "";
        userOkay = false;
      }
    }
    //if username doesn't already exist check if entered data okay
    if (userOkay) {

      if (this.password.length < 4) {
        this.userName = "";
        this.password = "";
        this.passwordAgain = "";
        alert('Password must be longer than 3!');
      }

      else if (this.password === this.passwordAgain) {
        //check if this username already exists an trigger alert to inform

        if (this.password === this.userName) {
          this.userName = "";
          this.password = "";
          this.passwordAgain = "";
          alert('Password and user name must be different!');
        }
        //else create user on data base and set user okay to true
        else {
          this.userOkay = true;

          let newUser = new User();
          newUser.setUser(this.userName, this.password);
          this.userService.logedInUser = newUser;
          this.userService.createUser(newUser).then(result => {
            if (result) {
              alert('Your user is now registrated!');
              this.router.navigateByUrl('');
            }
            else
              alert('registration failed');
          });
        }
      }
      else {
        this.userName = "";
        this.password = "";
        this.passwordAgain = "";
        alert('Your entered passwords are not the same');
      }
    }
    this.userName = "";
    this.password = "";
    this.passwordAgain = "";
  }

}
