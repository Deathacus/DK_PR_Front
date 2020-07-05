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
  public searchPostsByUserName: string = "";
  public postedMood: string = "";
  public allPosts: Post[] = [];
  public displayPosts: Post[] = [];
  public userPicked: any;
  public pickedEmoji: string = "";
  public postText: string = "";
  public postsOfUser: Post[] = [];
  public allUsers: User[] = [];
  private _searchValue: string = "";

  ngOnInit() {
    this.logedInUser = this.userService.logedInUser;
    console.log("LogedInUser is now: " + this.userService.logedInUser)
    this.postService
      .getAllPosts()
      .toPromise()
      .then(p => {
        this.allPosts = p;
        this.displayPosts = p.slice();
      }).then( () => {
        this.userService.getAllUsers().toPromise().then(u => {
          this.allUsers = u;
        });
    });

  }

  public get searchValue(): string {
    return this._searchValue;
  }

  public set searchValue(val: string) {
    this._searchValue = val;
    this.performSearch();
  }

  public performSearch() {
    this.displayPosts = this.allPosts;
    this.displayPosts = this.allPosts.filter(p => p.postText.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1 || p.userName.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1);
  }


  public select($event) {
    this.userPicked = $event.emoji;
    this.postText = this.postText + this.userPicked.native;
    console.log($event);
    console.log(this.userPicked);
    this.pickedEmoji = this.userPicked.native;
    console.log("native prop: " + this.userPicked.native.toString());

  }

  public postIt() {
    let newPost = new Post();
    let date: Date = new Date();

    newPost.setPost(this.postText, this.logedInUser.username, this.pickedEmoji,date.toJSON());
    this.postService.createPost(newPost).then(result => {
      if (result) {
        this.allPosts.push(newPost);
        this.displayPosts = this.allPosts;
        this.allPosts = [...this.allPosts];
        this.displayPosts = [...this.displayPosts];
        console.log("posted:" + this.postText);
      }
      else {
        alert('Your post failed');
        
      }
    });

  }

  public searchForPostOfUser() {
    this.postsOfUser = [];
    let userExists = false;
    for (let u of this.allUsers) {
      if (u.username === this.searchPostsByUserName) {
        userExists = true;
        for (let p of this.allPosts) {
          if (p.userName === this.searchPostsByUserName) {
            this.postsOfUser.push(p);
          }
        }
        if (this.postsOfUser.length <= 0)
          alert("This user doesn't posted anything!");
        break;
      }
    }
    if (!userExists)
      alert("This user doesn't exist");
    
  }

  public deleteSearchingForUserPosts() {
    this.searchPostsByUserName = "";
    this.postsOfUser = [...this.postsOfUser];
  }

} 
