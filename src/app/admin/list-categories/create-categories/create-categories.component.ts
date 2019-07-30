import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  formCategories: FormGroup;
  action: any = 'Add';
  type: any;
  data: any;
  buttonClicked: any;
  constructor(
    private fb: FormBuilder,
    public modalAdd: BsModalRef,
    private service: CategoriesService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.type == 'edit') {
      this.action = 'Update';
    } else if (this.type == 'delete') {
      this.action = 'Delete';
    }
    console.log(this.data);
    if (this.data != null) {
      this.formCategories.patchValue({
        ...this.data,
      });
    }
  }

  buildForm() {
    this.formCategories = this.fb.group({
      _id: 0,
      key: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  submit() {
    console.log("chich");

    if (this.formCategories.invalid) {
      return;
    }
    let params: any = this.formCategories.value;
    if (this.type == 'add') {
      params._id = null;
    }
    if (this.type == 'add') {
      this.service.addCategories(params).subscribe(add => {
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else if (this.type == 'edit') {
      console.log('this');
      this.service.updateCategories(params).subscribe(edit => {
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else {
      this.service.delete(params.key).subscribe(data => {
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }
}
