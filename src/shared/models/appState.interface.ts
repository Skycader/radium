import { AuthStateInterface } from '../../app/auth/models/authState.interface'
import { CounterStateInterface } from '../../app/counter/models/counter.model'

export interface AppStateInterface {
  auth: AuthStateInterface
  counter: CounterStateInterface
}
