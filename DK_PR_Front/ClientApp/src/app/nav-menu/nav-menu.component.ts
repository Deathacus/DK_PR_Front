import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(public logedInUserService: UserService) { }

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
