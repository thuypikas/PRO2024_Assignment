import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from './list-user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { daLocale } from 'ngx-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any[] = [];
  // users: User[];
  event: EventEmitter<any> = new EventEmitter();
  bsModalRef: BsModalRef;
  constructor(
    private service: UserService,
    private router: Router,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.service.getAllUser().subscribe(data => {
      // Object.assign(this.users, data);
      this.users = data;
    });
  }

  actionUser(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateUserComponent, {
      class: 'modal-lg',
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      }
    });
  }
  modalButtonClicked(data) {
    console.log(data);
    if (data) {
      this.getUserData();
    }
  }

  updateUser(user) {
    // this.service.getUserByEmail();
    this.bsModalRef = this.modalService.show(EditUserComponent, {
      class: 'modal-lg',
      initialState: {
        buttonClicked: this.modalButtonClicked.bind(this)
      }
    });
  }

  deleteUser(user: User) {
    this.service.delete(user.email).subscribe(data => {
      console.log(data);
      if (data) {
        this.getUserData();
      }
    });
  }
}
