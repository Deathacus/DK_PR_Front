import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
  public displayEmojis: boolean = false;
  private _searchUserValue: string = "";
  public displayUsers: User[] = [];

  ngOnInit() {
    this.logedInUser = this.userService.logedInUser;
    this.userService.wantToFollow = undefined;
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

  public get searchUserValue(): string {
    return this._searchUserValue;
  }

  public set searchUserValue(val: string) {
    this._searchUserValue = val;
    if (val.length > 0)
      this.performUserSearch();
    else
      this.displayUsers = [];
  }

  public performUserSearch() {
    this.displayUsers = this.allUsers;
    this.displayUsers = this.allUsers.filter(u => u.username.toLowerCase().indexOf(this.searchUserValue.toLowerCase()) != -1);
    this.displayUsers.forEach(u => console.log(u.username));
  }

  public performSearch() {
    this.displayPosts = this.allPosts;
    this.displayPosts = this.allPosts.filter(p => p.postText.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1 || p.userName.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1);
  }


  public select($event) {
    this.userPicked = $event.emoji;
    this.postText = this.postText + this.userPicked.native;
    this.pickedEmoji = this.userPicked.native;

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
        this.postText = "";
      }
      else {
        alert('Your post failed');
        
      }
    });

  }

  public searchForPostOfUsersearchForPostOfUser() {
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

  //public searchForUser() {
  //  this.
  //}

  public emojiSelection() {

    this.displayEmojis = !this.displayEmojis;
  }

  public routToUserpage(userName: string) {
    let userFound: boolean = false
    for(let u of this.allUsers) {
      if (u.username === userName) {
        this.userService.wantToFollow = u;
        this.router.navigateByUrl('/userpage');
        userFound = true;
        break;
      }
    }
    if (!userFound) {
      alert('Sorry an Error occoured!');
    }
  }

} 
