import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  listCategory: any[] = [];
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private service: CategoriesService
  ) { }

  ngOnInit() {
    this.getCategoriesData();
  }
  getCategoriesData() {
    this.service.getAllCategories().subscribe(data => {
      console.log(data);
      this.listCategory = data;
    });
  }

  modalButtonClicked(data) {
    console.log(data);
    if (data) {
      this.getCategoriesData();
    }
  }
  actionCategory(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateCategoriesComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      }
    });
  }
}
