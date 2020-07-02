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
  public allPosts: Post[];

  constructor(private router: Router, public logedInUserService: UserService, public postService: PostService ) { }

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

  public postText: string

  public postIt() {
    let newPost = new Post();
    
    newPost.setPost(this.postText);
    this.postService.createPost(newPost);
    this.router.navigateByUrl('');
    console.log("posted");
  }


  public getAllPosts() {
    this.postService.getAllPosts().toPromise().then(p => this.allPosts = p);
  }
} 
