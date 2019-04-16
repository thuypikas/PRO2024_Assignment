import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';
import { dayOfYearFromWeeks } from 'ngx-bootstrap/chronos/units/week-calendar-utils';
import { NotiMess } from 'src/app/shared/noti-mess';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  type: any;
  data: any;
  formUser: FormGroup;
  buttonClicked: any;
  action: any = 'Add';
  // submitted = false;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    public modalAdd: BsModalRef,
  ) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.data);
    if (this.type == 'edit') {
      this.action = 'Update';
    } else if (this.type == 'delete') {
      this.action = 'Delete';
    }
    if (this.data != null) {
      this.formUser.patchValue({
        ...this.data,
        gender: Boolean(this.data.gender)
      });
    }
  }
  buildForm() {
    this.formUser = this.fb.group({
      _id: 0,
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      avatar: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  submit() {
    if (this.formUser.invalid) {
      return;
    }
    // tslint:disable-next-line:prefer-const
    let params: any = this.formUser.value;
    if (this.type == 'add') {
      params._id = null;
    }
    if (this.type == 'add') {
      this.service.addUser(params).subscribe(data => {
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else if (this.type == 'edit') {
      this.service.updateUser(params).subscribe(data => {
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else {
      this.service.delete(params.email).subscribe(data => {
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }
}
