import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Post } from '@models/models';
import { PostsStore } from '@storeManager/posts.store';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit, OnDestroy {
  postList$: Observable<Post[]>
  throttle = 100
  scrollDistance = 2
  direction = ""
  private pageNumber = 1
  private subscriptions: Subscription[] = []

  constructor(private store: PostsStore) { }

  ngOnInit() {
    this.postList$ = this.store.selectPosts$
    this.store.loadPosts('none', this.pageNumber)

    this.subscriptions.push(this.store.selectPageNumber$.pipe(map(page => {
      this.pageNumber = page
    })).subscribe())
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe())
  }
  trackByFn(index: number, item: Post) {
    return item;
  }
  onScrollDown() {
    this.direction = "down";
    this.pageNumber ++
    this.store.loadPosts('none', this.pageNumber)
  }
}