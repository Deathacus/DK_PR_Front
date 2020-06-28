import { Component } from '@angular/core';
import { userService } from '../service/userService';
import { User } from '../models/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(public logedInUserService: userService) { }

  public logedInUser: User;
  //ngOnInit() {
  //  this.logedInUser = this.logedInUserService.logedInUser;
  //}

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public logOut() {
    this.logedInUserService.logedInUser = undefined;
  }
}
