import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public allPosts: Post[];

  constructor(public logedInUserService: UserService, public postService: PostService ) { }

  public logedInUser: User;
  public searchPostsByUserName: string;

  ngOnInit() {
    this.logedInUser = this.logedInUserService.logedInUser;
    this.getAllPosts();
    console.log("LogedInUser is now: " + this.logedInUserService.logedInUser)
  }

  public userPicked: any;


  public select($event) {
    this.userPicked = $event.emoji;
    console.log($event);
    console.log(this.userPicked);
  }

  public postIt() { }


  public getAllPosts() {
    this.postService.getAllPosts().toPromise().then(p => this.allPosts = p);
  }
} 
