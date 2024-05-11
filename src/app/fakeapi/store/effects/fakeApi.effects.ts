import {Actions, createEffect, ofType} from '@ngrx/effects'
import {FakeapiService} from '../../services/fakeapi.service'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {
  getCommentAction,
  getCommentFailureAction,
  getCommentSuccessAction,
} from '../actions/getComment.action'
import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {CommentInterface} from '../../models/fakeapi.interface'

@Injectable()
export class FakeApiEffect {
  getCommentEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentAction),
      switchMap(({commentId}) => {
        return this.fakeApiService.getComment(commentId).pipe(
          map((comment: CommentInterface) => {
            return getCommentSuccessAction({comment})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCommentFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private fakeApiService: FakeapiService,
  ) {}
}
