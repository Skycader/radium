import { BackendErrorsInterface } from '../../../shared/models/backendErrors.interface'
import { CurrentUserInterface } from '../../../shared/models/currentUser.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null
}
