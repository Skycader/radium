import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import {
  currentUserSelector,
  isAnonymousInSelector,
  isLoggedInSelector,
} from '../../../../auth/store/selectors'
import { Observable } from 'rxjs'
import { AppStateInterface } from '../../../../../shared/models/appState.interface'
import { CurrentUserInterface } from '../../../../../shared/models/currentUser.interface'

@Component({
  selector: 'rd-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  public isLoggedIn$: Observable<boolean | null> = this.store.pipe(
    select(isLoggedInSelector),
  )
  public isAnonymous$: Observable<boolean> = this.store.pipe(
    select(isAnonymousInSelector),
  )
  public currentUser$: Observable<CurrentUserInterface | null> =
    this.store.pipe(select(currentUserSelector))

  constructor(private store: Store<AppStateInterface>) { }
}
