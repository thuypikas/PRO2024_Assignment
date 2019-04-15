import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { User } from '../list-user.model';
import { NotiMess } from 'src/app/shared/noti-mess';

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
  emailData: any;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    public modalAdd: BsModalRef,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params[('email')]) {
        this.email = params.get('email');
        this.getData(this.email);
      }
    });
    this.buildForm();
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

  getData(email) {
    console.log('tt');
    this.service.getUserByEmail({ email }).subscribe(result => {
      this.emailData = result;
      console.log(result);
      this.formEdit.patchValue({
        ...result,
      });
    });
  }
  edit() {
    // tslint:disable-next-line:prefer-const
    let formData = this.formEdit.value;
    const body = {
      ...formData,
      email: this.email
    };
    this.service.updateUser(body).subscribe(res => {
      console.log(res);
      this.buttonClicked(true);
      this.modalAdd.hide();
    });
  }
}
