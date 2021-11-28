import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppStartComponent } from './app-start/app-start.component';
import * as fromPosts from './store/posts.reducers';
import { PostsEffects } from './store/posts.effects';
import { HttpClientModule } from '@angular/common/http';
import { PostsStoreModule } from './store/posts-store.module';

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PostsStoreModule,
    StoreModule.forRoot({manager: fromPosts.postsReducer}),
    EffectsModule.forRoot([PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
