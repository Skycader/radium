import {createAction, props} from '@ngrx/store'
import {FakeApiActionEnum} from './available-actions.enum'
import {CommentInterface} from '../../models/fakeapi.interface'

export const getCommentAction = createAction(
  FakeApiActionEnum.GET_COMMENT,
  props<{commentId: number}>(),
)

export const getCommentSuccessAction = createAction(
  FakeApiActionEnum.GET_COMMENT,
  props<{comment: CommentInterface}>(),
)

export const getCommentFailureAction = createAction(
  FakeApiActionEnum.GET_COMMENT,
)
