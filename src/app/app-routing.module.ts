import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
const appRoutes: Routes = [
  { path: '', redirectTo: '/admin-home', pathMatch: 'full' },
  { path: 'admin-home', loadChildren: () => AdminModule},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
