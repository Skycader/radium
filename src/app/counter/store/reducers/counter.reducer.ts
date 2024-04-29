import {Action, createReducer, on} from '@ngrx/store'
import {CounterStateInterface} from '../../models/counter.model'
import {incrementAction} from '../actions/increment.action'
import {decrementAction} from '../actions/decrement.action'

export const initialState: CounterStateInterface = {
  value: 0,
}

const authReducer = createReducer(
  initialState,
  on(
    incrementAction,
    (state): CounterStateInterface => ({
      ...state,
      value: state.value + 1,
    }),
  ),
  on(
    decrementAction,
    (state): CounterStateInterface => ({
      ...state,
      value: state.value - 1,
    }),
  ),
)

export function counterReducer(state: CounterStateInterface, action: Action) {
  return authReducer(state, action)
}
