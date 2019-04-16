import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor( private modalService: BsModalService) { }

  ngOnInit() {
  }

  actionCategory() {
    this.bsModalRef = this.modalService.show(CreateCategoriesComponent, {});
  }
}
