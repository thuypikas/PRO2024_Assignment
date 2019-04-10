import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListUserModule } from './list-user/list-user.module';

@NgModule({
  declarations: [ListCategoriesComponent, ListPostComponent, ListUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ListUserModule
  ],
  providers: []
})
export class AdminModule { }
