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

  public createPost(post: Post): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post<Post>('api/post', post)
        .toPromise()
        .then(result => resolve(true))
        .catch(reason => reject(reason));
    });
     
  }
}
