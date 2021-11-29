import { createReducer, on } from "@ngrx/store";
import { ModalConfirm, Post } from "@models/models";
import * as PostsActions from './posts.actions';

export const initialState: PostsActions.ManagerState = {
    posts: [],
    filter: '',
    pageNum: 1,
    selectedPost: new Post(),
    modalConfirm: new ModalConfirm()
}

export const postsReducer = createReducer(
    initialState,
    on(PostsActions.LoadPostsAction, (state, {filter, pageNumber}) => ({ ...state, 
        filter: filter === 'none' ? state.filter : filter,
        pageNum: pageNumber === 0 ? 1 : pageNumber
    })),

    on(PostsActions.LoadPostsSuccessAction, (state, {posts}) => {        
        const list = posts.slice(posts.length - 10)
        return { ...state, posts: [...posts, ...list] } 
    }),

    on(PostsActions.SetPageNumberAction, (state, {pageNumber}) => ({ ...state, pageNum: pageNumber })),

    on(PostsActions.SetFilterAction, (state, {filter}) => ({ ...state, filter: filter, posts: [] })),

    on(PostsActions.SetModalShowAction, (state, {show}) => {
        const confirmed = show ? false : state.modalConfirm.deleteOK
        return { ...state,
            modalConfirm: {...state.modalConfirm, modalShow: show, deleteOK: confirmed}} }),

    on(PostsActions.SetModalConfirmAction, (state, {ok, id}) => {
        const show = ok ? false : state.modalConfirm.modalShow
        return { ...state,
            modalConfirm: {...state.modalConfirm, deleteOK: ok, modalShow: show}} }),
   
    on(PostsActions.RemovePostAction, (state, {id}) => ({ ...state })),

    on(PostsActions.RemovePostSuccessAction, (state, {result}) => (state))
);
