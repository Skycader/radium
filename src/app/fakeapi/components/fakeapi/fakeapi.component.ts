import {Component} from '@angular/core'
import {AppStateInterface} from '../../../../shared/models/appState.interface'
import {Store, select} from '@ngrx/store'
import {getCommentAction} from '../../store/actions/getComment.action'
import {commentSelector} from '../../store/selectors/fakeapi.selector'

@Component({
  selector: 'rd-fakeapi',
  templateUrl: './fakeapi.component.html',
  styleUrl: './fakeapi.component.scss',
})
export class FakeapiComponent {
  public currentComment$ = this.store.pipe(select(commentSelector))
  public currentCommentId: number = 1
  constructor(private store: Store<AppStateInterface>) {}

  public getCurrentComment(): void {
    this.store.dispatch(getCommentAction({commentId: 1}))
  }
}
