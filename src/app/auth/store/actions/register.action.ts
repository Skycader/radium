import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { User } from '../../models/user.model';

export const registerAction = createAction(ActionTypes.REGISTER, props<User>());
