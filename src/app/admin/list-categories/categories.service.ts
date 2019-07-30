import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000/';

  getAllCategories() {
    return this.http.get<Categories[]>(this.baseurl + 'categories');
  }

  getCategoriesByKey(key) {
    return this.http.get<Categories[]>(this.baseurl + 'categories' + '/' + key);
  }

  addCategories(categories: Categories) {
    return this.http.post(this.baseurl + 'categories', categories);
  }

  updateCategories(categories: Categories) {
    return this.http.put(this.baseurl + 'categories' + '/' + categories.key, categories);
  }

  delete(key: string) {
    return this.http.delete(this.baseurl + 'categories' + '/' + key);
  }

}
