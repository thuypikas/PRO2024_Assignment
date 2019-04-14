import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from '../list-user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formEdit: FormGroup;
  buttonClicked: any;
  user: User;
  email: string;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    public modalAdd: BsModalRef,
  ) { }


  ngOnInit() {
    this.buildForm();
    this.service.getUserByEmail('').subscribe(res => {
      console.log(res);
      this.formEdit.patchValue(res);
    });
  }

  buildForm() {
    this.formEdit = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      age: [0, Validators.required],
      avatar: ['', Validators.required],
      gender: [true, Validators.required]
    });
  }
  edit(user: User) {
    this.service.getUserByEmail(user.email).subscribe(data => {
      console.log(data);
      this.formEdit.patchValue(data);
      // const data = this.formEdit.value.email;
    });
  }
}
