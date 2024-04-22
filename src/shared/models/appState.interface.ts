import {AuthStateInterface} from '../../app/auth/models/authState.interface'
import {CounterStateInterface} from '../../app/counter/models/counter.model'
import {FakeApiStateInterface} from '../../app/fakeapi/models/fakeapi.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  counter: CounterStateInterface
  fakeApi: FakeApiStateInterface
}
