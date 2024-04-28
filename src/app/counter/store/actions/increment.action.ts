import { createAction, props } from '@ngrx/store'
import { CounterAction } from './available-actions.enum'

export const incrementAction = createAction(CounterAction.INCREMENT)
