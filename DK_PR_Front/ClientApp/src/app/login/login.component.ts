import { Component } from '@angular/core';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})


export class LoginComponent {
  constructor() { }

  public userName: string = "";
  public password: string = "";


  NgOnInit() {

  }


  public checkUserData() {
    //if() --> check if userName and password is correct/exists on database
    console.log("name: " + this.userName);
    console.log("password: " + this.password);
  }
}
