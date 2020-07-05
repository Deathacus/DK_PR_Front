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
  public followers: User[] = [];

  ngOnInit() {
    this.userOfPage = this.userService.wantToFollow;
    this.userService.getFollowers(this.userService.logedInUser).toPromise().then(f => {
      this.followers = f;
    });
  }


  public wantToFollowUser() {
    let userfolow: User[];
    userfolow.push(this.userService.logedInUser);
    userfolow.push(this.userService.wantToFollow);
    this.userService.followUser(userfolow).then(result => {
      if (result) {
        this.userService.getFollowers(this.userService.logedInUser).toPromise().then(res => {
          this.followers = res;
          this.followers = [...this.followers];
        });
      }
      else {
        alert('Your post failed');

      }
    });
  }
}

