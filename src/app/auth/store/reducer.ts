import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../models/authState.interface'
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './actions/register.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    registerSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
  on(
    registerFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    }),
  ),
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
