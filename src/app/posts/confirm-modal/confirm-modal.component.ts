import { Component, Input, OnInit } from '@angular/core';
import { PostsStore } from '@storeManager/posts.store';
import { Post } from '@models/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() post: Post;
  modalVisible$: Observable<boolean> = of(false)
  
  constructor(private store: PostsStore) {    
  }
  
  ngOnInit(): void {   
    this.modalVisible$ = this.store.selectModalVisible$
  }

  ok() {
    this.store.confirmModal(this.post.id)
    this.store.removePost(this.post.id)
  }
  show() {
    this.store.showModal(true)
  }
  hide() {
    this.store.showModal(false)
  }
  
}
