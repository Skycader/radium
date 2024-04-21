import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../../services/auth.service'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { CurrentUserInterface } from '../../../../shared/models/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistanceService } from '../../../shared/services/persistance.service'
import { Router } from '@angular/router'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistance.set('accessToken', currentUser.token)
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors }),
            )
          }),
        )
      }),
    ),
  )

  reidrectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
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
  ) { }
}
