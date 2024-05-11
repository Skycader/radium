import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {CurrentUserInterface} from '../../../../shared/models/currentUser.interface'

export const getUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>(),
)

export const getUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
)
