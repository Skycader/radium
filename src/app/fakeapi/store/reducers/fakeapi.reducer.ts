import {Action, createReducer, on} from '@ngrx/store'
import {FakeApiStateInterface} from '../../models/fakeapi.interface'
import {getCommentAction} from '../actions/getComment.action'

const initialState: FakeApiStateInterface = {
  currentCommentId: null,
  currentComment: null,
}

const fakeApi = createReducer(
  initialState,
  on(
    getCommentAction,
    (state, action): FakeApiStateInterface => ({
      ...state,
      currentCommentId: action.commentId,
    }),
  ),
)

export function fakeApiReducer(state: FakeApiStateInterface, action: Action) {
  return fakeApi(state, action)
}
