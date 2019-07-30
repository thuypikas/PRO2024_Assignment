import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }
  baseurl = 'http://localhost:3000/';

  getAllPost() {
    return this.http.get<Post[]>(this.baseurl + 'posts');
  }

  getPostById(_id) {
    return this.http.get<Post[]>(this.baseurl + 'posts' + '/' + _id);
  }

  addPost(post: Post) {
    return this.http.post(this.baseurl + 'posts', post);
  }

  updatePost(post: Post) {
    return this.http.put(this.baseurl + 'posts' + '/' + post.key, post)
  }

  delete(_id: number) {
    return this.http.delete(this.baseurl + 'post' + '/' + _id);
  }
}
