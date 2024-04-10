import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { RegisterRequestInterface } from '../../models/registerRequest.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>(),
)

export const registerActionSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<RegisterRequestInterface>(),
)
