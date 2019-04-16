import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
