import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { LoginRequestInterface } from '../../models/loginRequest.interface'
import { CurrentUserInterface } from '../../../../shared/models/currentUser.interface'
import { BackendErrorsInterface } from '../../../../shared/models/backendErrors.interface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>(),
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
)
