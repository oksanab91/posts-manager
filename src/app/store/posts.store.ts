import { Injectable } from "@angular/core";
import { createSelector, Store } from "@ngrx/store";
import { AppState, LoadPostsAction, RemovePostAction, SetModalConfirmAction, SetModalShowAction } from ".";

@Injectable()
export class PostsStore {
    public selectPosts$ = this.store.select(selectPosts)
    public selectCurrentPosts$ = this.store.select(selectCurrentPost)    
    public selectVisiblePosts$ = this.store.select(selectVisiblePosts)
    public selectModalVisible$ = this.store.select(selectModalVisible)
    public selectModalConfirmed$ = this.store.select(selectModalConfirmed)

    constructor(private store: Store<AppState>) {}

    loadPosts(filter: string, pageNumber: number) {
        this.store.dispatch(LoadPostsAction({filter: filter, pageNumber: pageNumber}))
    }
    removePost(id: string) {
        this.store.dispatch(RemovePostAction({id: id}))
    }
    showModal(show: boolean) {
        this.store.dispatch(SetModalShowAction({show: show}))
    }
    confirmModal(id: string) {
        this.store.dispatch(SetModalConfirmAction({ok: true, id: id}))
    }
}
export const selectPosts = (state: AppState) => state.manager.posts
export const selectCurrentPost = (state: any) => state.selectedPost
export const selectPageNumber = (state: AppState) => state
export const selectVisiblePosts = createSelector(
    selectPageNumber,
    (state: AppState) => selectPosts(state)
)
export const selectModalVisible = (state: AppState) => state.manager.modalConfirm.modalShow
export const selectModalConfirmed = (state: AppState) => state.manager.modalConfirm.deleteOK