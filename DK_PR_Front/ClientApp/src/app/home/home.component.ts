import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private router: Router, public userService: UserService, public postService: PostService ) { }

  public logedInUser: User;
  public searchPostsByUserName: string;
  public postedMood: string = "";
  public allPosts: Post[];
  public userPicked: any;
  public postText: string = "";

  ngOnInit() {
    this.logedInUser = this.userService.logedInUser;
    console.log("LogedInUser is now: " + this.userService.logedInUser)
    this.postService.getAllPosts().toPromise().then(p => {
      this.allPosts = p;
    });

  }




  public select($event) {
    this.userPicked = $event.emoji;
    this.postText = this.postText + this.userPicked
    console.log($event);
    console.log(this.userPicked);
  }

  public postIt() {
    let newPost = new Post();
    let date: Date = new Date();

    newPost.setPost(this.postText, this.logedInUser.username, "",date.toJSON());
    this.postService.createPost(newPost).then(result => {
      if (result) {
        this.allPosts.push(newPost);
        this.allPosts = [...this.allPosts];
        console.log("posted:" + this.postText);
      }
      else {
        alert('Your post failed');
        
      }
    });

  }

} 
