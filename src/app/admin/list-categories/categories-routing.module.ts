import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';

const routes: Routes = [
  {
    path: 'create-categories', component: CreateCategoriesComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
