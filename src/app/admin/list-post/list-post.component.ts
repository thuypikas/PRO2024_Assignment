import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { PostService } from './post.service';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost: any[] = [];
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private service: PostService
  ) { }

  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.service.getAllPost().subscribe(data => {
      console.log(data);
      this.listPost = data;
    });
  }

  modalButtonClicked(data) {
    console.log(data);
    if (data) {
      this.getPostData();
    }
  }
  actionPost(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreatePostComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      } 
    });
  }
}
