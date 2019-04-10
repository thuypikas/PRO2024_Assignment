import { Component, OnInit } from '@angular/core';
import { User } from './list-user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[];
  bsModalRef: BsModalRef;
  constructor(
    private service: UserService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.service.getAllUser().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    this.bsModalRef = this.modalService.show(CreateUserComponent, {
      class: 'modal-lg'
    });
    this.bsModalRef.content.closeBtnName = 'Add User';
  }

  updateUser() {

  }

  deleteUser() {

  }
}
