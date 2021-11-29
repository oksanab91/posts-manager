import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { AppState, selectFilter, selectPageNumber } from '.';
import { PostsApiService } from '../services/posts-api.service';

@Injectable()
export class PostsEffects {
 
  loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType('[POSTS] load'),
      withLatestFrom(this.store$.select(selectFilter), this.store$.select(selectPageNumber)),
      mergeMap(([st, fl, pg]) => this.apiService.getPosts(fl, Number(pg))
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
    private apiService: PostsApiService,
    private store$: Store<AppState>
  ) {}
}
