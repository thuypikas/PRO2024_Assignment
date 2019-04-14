import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';
import { dayOfYearFromWeeks } from 'ngx-bootstrap/chronos/units/week-calendar-utils';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUser: FormGroup;
  buttonClicked: any;
  // submitted = false;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    public modalAdd: BsModalRef,
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.createUser = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      age: ['', Validators.required],
      avatar: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  add() {
    // this.submitted = true;
    if (this.createUser.valid) {
      this.service.addUser(this.createUser.value).subscribe(data => {
        console.log(data);
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }
}
