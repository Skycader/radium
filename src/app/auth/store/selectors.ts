import {createSelector} from '@ngrx/store'
import {AppStateInterface} from '../../../shared/models/appState.interface'
import {AuthStateInterface} from '../models/authState.interface'

export const authFeatureSelector = (
  state: AppStateInterface,
): AuthStateInterface => state.auth

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting,
)
