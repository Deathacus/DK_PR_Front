import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable()
export class PostService {
  
  constructor(private http: HttpClient) {
  }

  public getPostByUserName(userName: string) {
    return this.http.get<Post[]>('api/post/' + userName);
  }

  public getAllPosts() {
    return this.http.get<Post[]>('api/post');
  }

  public createPost(post: Post) {
     this.http.post<Post>('api/post', post);
  }
}
