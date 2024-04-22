import { Action, createReducer, on } from '@ngrx/store'
import { FakeApiStateInterface } from '../../models/fakeapi.interface'
import {
  getCommentAction,
  getCommentFailureAction,
  getCommentSuccessAction,
} from '../actions/getComment.action'

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
      currentCommentId: getNumber(),
    }),
  ),
  on(
    getCommentSuccessAction,
    (state, action): FakeApiStateInterface => ({
      ...state,
      currentComment: action.comment,
    }),
  ),
  on(
    getCommentFailureAction,
    (state, action): FakeApiStateInterface => ({
      ...state,
      currentCommentId: 55,
    }),
  ),
)

function getNumber() {
  console.log('returning 10')
  return 10
}

export function fakeApiReducer(state: FakeApiStateInterface, action: Action) {
  return fakeApi(state, action)
}
