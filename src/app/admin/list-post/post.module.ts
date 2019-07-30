import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
