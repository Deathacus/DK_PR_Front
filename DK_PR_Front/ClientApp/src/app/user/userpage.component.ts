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
    this.userService.getFollowers(this.userService.logedInUser.username).toPromise().then(f => {
      this.followers = f;
      this.followers = [...this.followers];
    });
  }

  //Unfollow aufrufen, funktioniert!


  public wantToFollowUser() {
    let userfolow: User[] = [];

    userfolow.push(this.userService.logedInUser);
    userfolow.push(this.userService.wantToFollow);

    this.userService.followUser(userfolow).then(result => {
      if (result) {
        this.userService.getFollowers(this.userService.logedInUser.username).toPromise().then(res => {
          this.followers = res;
          this.followers = [...this.followers];
        });
      }
      else {
        alert('Your post failed');
      }
    });
    //Liest nur neue angelegte User aus, bei vorhandenen User => fehler
    //console.log(this.followers[1].username);
  }
}

