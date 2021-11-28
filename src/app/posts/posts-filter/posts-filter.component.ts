import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, of, Subject, Subscription, switchMap } from 'rxjs';
import { PostsStore } from '@storeManager/posts.store';

@Component({
  selector: 'posts-filter',
  templateUrl: './posts-filter.component.html',
  styleUrls: ['./posts-filter.component.scss']
})
export class PostsFilterComponent implements OnInit {
  private subscription: Subscription  
  private searchName = new Subject<string>()
  constructor(private store: PostsStore) { }

  ngOnInit() {
    this.subscription = this.searchName.pipe(
      debounceTime(300),
      distinctUntilChanged(),             
      switchMap((filter: string) => of(this.store.loadPosts(filter, 0)))
    )
    .subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(filter: string): void {    
    this.searchName.next(filter)
  }

  validateFilter(filter: string): boolean {
    if(!filter){
      return false
    }
    return true
  }
}
