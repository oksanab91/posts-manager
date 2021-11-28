import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsFilterComponent } from './posts-filter/posts-filter.component';
import { PostComponent } from './post/post.component';
import { PostsStore } from '../store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [PostsListComponent, PostsFilterComponent, PostComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule.forChild([
      { 
        path: '', component: PostsListComponent
      },
      { path: 'confirm-delete', data:{ id:'', name:'' }, component: ConfirmModalComponent       
      }
    ])
  ],
  providers: [PostsStore]  
})
export class PostsModule { }
