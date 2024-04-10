import { createSelector } from '@ngrx/store'
import { CounterStateInterface } from '../../models/counter.model'
import { AppStateInterface } from '../../../../shared/models/appState.interface'

export const counterFeatureSelector = (
  state: AppStateInterface,
): CounterStateInterface => state.counter

export const counterValueSelector = createSelector(
  counterFeatureSelector,
  (counterState: CounterStateInterface) => counterState.value,
)
