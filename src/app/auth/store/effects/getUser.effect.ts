import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {AuthService} from '../../services/auth.service'
import {PersistanceService} from '../../../shared/services/persistance.service'
import {CurrentUserInterface} from '../../../../shared/models/currentUser.interface'
import {
  getUserAction,
  getUserFailureAction,
  getUserSuccessAction,
} from '../actions/getUser.action'

@Injectable()
export class GetUserEffect {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      switchMap(() => {
        const token = this.persistance.get('accessToken')
        if (!token) return of(getUserFailureAction())

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getUserSuccessAction({currentUser})
          }),
          catchError(() => {
            return of(getUserFailureAction())
          }),
        )
      }),
    ),
  )
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistance: PersistanceService,
  ) {}
}
