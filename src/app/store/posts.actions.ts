import { createAction, props } from "@ngrx/store"
import { ModalConfirm, Post } from "@models/models";

export class AppState {
    manager: ManagerState
}

export class ManagerState {
    posts: any[]
    filter: string
    pageNum: number
    selectedPost: Post = new Post()
    modalConfirm: ModalConfirm
}

export const LoadPostsAction = createAction(
    '[POSTS] load',
    props<{filter: string, pageNumber: number}>()
);

export const LoadPostsSuccessAction = createAction(
    '[POSTS] loaded Success',
    props<{posts: Post[]}>()
);
export const SetPageNumberAction = createAction(
    '[POSTS] set page',
    props<{pageNumber: number}>()
);
export const SetFilterAction = createAction(
    '[POSTS] set filter',
    props<{filter: string}>()
);
export const SetModalShowAction = createAction(
    '[MODAL] show',
    props<{show: boolean}>()
);
export const SetModalConfirmAction = createAction(
    '[MODAL] confirm',
    props<{ok: boolean, id: string}>()
);

export const RemovePostAction = createAction(
    '[POSTS] remove',
    props<{id: string}>()
);
export const RemovePostSuccessAction = createAction(
    '[POSTS] removed Success',
    props<{result: string}>()
);