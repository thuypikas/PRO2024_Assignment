import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './list-user/create-user/create-user.component';
import { CreateCategoriesComponent } from './list-categories/create-categories/create-categories.component';
import { CreatePostComponent } from './list-post/create-post/create-post.component';

const routes: Routes = [
  { path: 'category', component: ListCategoriesComponent },
  { path: 'post', component: ListPostComponent },
  { path: 'user', component: ListUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [
    CreateUserComponent,
    CreateCategoriesComponent,
    CreatePostComponent
  ]
})
export class AdminRoutingModule { }
