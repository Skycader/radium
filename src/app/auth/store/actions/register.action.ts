import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { CurrentUserInterface } from '../../shared/models/user.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<CurrentUserInterface>(),
);
