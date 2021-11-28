import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@models/models';
import { PostsStore } from '@storeManager/posts.store';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit {
  postList$: Observable<Post[]>
  throttle = 50;
  scrollDistance = 2;
  direction = "";
  pageNumber = 1;

  constructor(private store: PostsStore) { }

  ngOnInit() {
    this.postList$ = this.store.selectVisiblePosts$
    this.store.loadPosts('', this.pageNumber)
  }

  trackByFn(index: number, item: Post) {
    return item;
  }
  onScrollDown() {
    this.direction = "down";
    this.pageNumber++;
    this.store.loadPosts('', this.pageNumber)
  }  
}