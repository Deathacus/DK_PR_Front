import { Component } from "@angular/core";
import { UserService } from "../service/user.service";
import { PostService } from "../service/post.service";
import { User } from "../models/user";
import { Router } from '@angular/router';




@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
})
export class UserpageComponent {

  constructor(public userService: UserService, public postService: PostService, private router: Router) { }


  public userOfPage: User;
  public followers: User[] = [];
  public displayFollow: boolean = true;

  ngOnInit() {
    this.userOfPage = this.userService.wantToFollow;
    this.userService.getFollowers(this.userOfPage.username).toPromise().then(f => {
      this.followers = f;
      this.followers = [...this.followers];
      console.log(this.followers);
      for (let f of this.followers) {
        if (this.userService.logedInUser.username === f.username) {
          this.displayFollow = false;
        }
      }
    });
  }

  //Unfollow aufrufen, funktioniert!


  public wantToFollowUser() {
    let userfollow: User[] = [];

    userfollow.push(this.userService.logedInUser);
    userfollow.push(this.userService.wantToFollow);

    this.userService.followUser(userfollow).then(result => {
      if (result) {
        this.userService.getFollowers(this.userOfPage.username).toPromise().then(res => {
          this.followers = res;
          this.followers = [...this.followers];
          console.log(this.followers);
          this.displayFollow = false;
        });
      }
      else {
        alert('Loading followers failed');
      }
    });
    //Liest nur neue angelegte User aus, bei vorhandenen User => fehler
    //console.log(this.followers[1].username);
  }

  public unfollowUser() {
    let userfollow: User[] = [];

    userfollow.push(this.userService.logedInUser);
    userfollow.push(this.userService.wantToFollow);


    this.userService.unFollowUser(userfollow).then(result => {
      if (result) {
        this.userService.getFollowers(this.userOfPage.username).toPromise().then(res => {
          this.followers = res;
          this.followers = [...this.followers];
          console.log(this.followers);
          this.displayFollow = true;
        });
      }
      else {
        alert('Loading followers failed');
      }
    });
  }
}

