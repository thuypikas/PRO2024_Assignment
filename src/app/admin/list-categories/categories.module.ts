import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@NgModule({
  declarations: [CreateCategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoriesModule { }
