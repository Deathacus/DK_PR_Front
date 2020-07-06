import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(public logedInUserService: UserService, private router: Router) { }

  public logedInUser: User;

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

  public rout() {
    this.logedInUserService.wantToFollow = this.logedInUserService.logedInUser;
    this.router.navigateByUrl('/userpage');
  }
}
