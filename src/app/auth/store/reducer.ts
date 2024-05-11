import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../models/authState.interface'
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './actions/register.action'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action'
import {
  getUserAction,
  getUserFailureAction,
  getUserSuccessAction,
} from './actions/getUser.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoading: false,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      validationErrors: null,
      currentUser: action.currentUser,
    }),
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    loginAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      isLoggedIn: true,
      currentUser: action.currentUser,
    }),
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    getUserAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    }),
  ),
  on(
    getUserFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: null,
    }),
  ),
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
