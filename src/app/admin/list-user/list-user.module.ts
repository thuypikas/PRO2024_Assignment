import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class ListUserModule { }
