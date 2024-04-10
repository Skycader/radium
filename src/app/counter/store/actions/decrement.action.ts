import { createAction } from '@ngrx/store'
import { CounterAction } from './available-actions.enum'

export const decrementAction = createAction(CounterAction.DECREMENT)
