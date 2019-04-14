import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './list-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  baseurl = 'http://localhost:3000/';

  getAllUser() {
    return this.http.get<User[]>(this.baseurl + 'users');
  }

  getUserByEmail(email: string) {
    return this.http.get<User>(this.baseurl + 'users' + '/' + email);
  }

  addUser(user: User) {
    return this.http.post(this.baseurl + 'users', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseurl + 'users' + '/' + user.email, user);
  }

  delete(email: string) {
    return this.http.delete(this.baseurl + 'users' + '/' + email);
  }
}
