import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {AuthService} from '../../services/auth.service'
import {PersistanceService} from '../../../shared/services/persistance.service'
import {Router} from '@angular/router'
import {CurrentUserInterface} from '../../../../shared/models/currentUser.interface'
import {HttpErrorResponse} from '@angular/common/http'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistance.set('accessToken', currentUser.token)
            return loginSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({errors: errorResponse.error.errors}))
          }),
        )
      }),
    ),
  )

  reidrectAfterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        }),
      ),
    {
      dispatch: false,
    },
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistance: PersistanceService,
    private router: Router,
  ) {}
}
