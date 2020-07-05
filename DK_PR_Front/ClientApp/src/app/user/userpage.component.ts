import { Component } from "@angular/core";
import { UserService } from "../service/user.service";
import { PostService } from "../service/post.service";
import { User } from "../models/user";




@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
})
export class UserpageComponent {

  constructor(public userService: UserService, public postService: PostService) { }

  public userOfPage: User;

  ngOnInit() {
    this.userOfPage = this.userService.wantToFollow;
  }


  public wantToFollowUser() {

  }
}

