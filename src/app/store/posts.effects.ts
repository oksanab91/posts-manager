import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostsApiService } from '../services/posts-api.service';

@Injectable()
export class PostsEffects {
 
  loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType('[POSTS] load'),
      mergeMap(({filter, pageNumber}) => this.apiService.getPosts(filter, pageNumber)
        .pipe(
          map(posts => ({ type: '[POSTS] loaded Success', posts: posts }) ),
          catchError(() => EMPTY)
        ))
      )
  )

  removePost$ = createEffect(() => this.actions$.pipe(
    ofType('[POSTS] remove'),
    mergeMap(({id}) => this.apiService.removePost(id)
      .pipe(
        map((result) => ({ type: '[POSTS] removed Success' })),
        catchError(() => EMPTY)
      ))
    )
  )
 
  constructor(
    private actions$: Actions,
    private apiService: PostsApiService
  ) {}
}
