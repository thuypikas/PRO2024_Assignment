import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef, ButtonsModule } from 'ngx-bootstrap';
import { AdminModule } from './admin/admin.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ButtonsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
