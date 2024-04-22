import {createSelector} from '@ngrx/store'
import {FakeApiStateInterface} from '../../models/fakeapi.interface'
import {AppStateInterface} from '../../../../shared/models/appState.interface'

const fakeApiFeatureSelector = (
  state: AppStateInterface,
): FakeApiStateInterface => state.fakeApi

export const commentSelector = createSelector(
  fakeApiFeatureSelector,
  (counterState: FakeApiStateInterface) => counterState.currentComment,
)
