import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})


export class RegistrationComponent {
  constructor(private router: Router) { }

  public userName: string = "";
  public password: string = "";
  public passwordAgain: string = " ";
  public userOkay: boolean = false;

  ngOnInit() {
      this.userOkay = false;
  }


  public checkUserData() {


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
      console.log("username: " + this.userName);
      console.log("password: " + this.password);
      console.log("passwordCheck: " + this.passwordAgain);
      this.userOkay = true;
      console.log("boolean" + this.userOkay);

      alert('Your user is now registrated!');
      this.router.navigateByUrl('');
    }
    else if (this.password !== this.userName) {
      this.userName = "";
      this.password = "";
      this.passwordAgain = " ";
      alert('Your entered passwords are not the same');
    }
  }
}
