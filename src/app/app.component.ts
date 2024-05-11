import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {AppStateInterface} from '../shared/models/appState.interface'
import {getUserAction} from './auth/store/actions/getUser.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title = 'radium'

  constructor(private store: Store<AppStateInterface>) {}
  public ngOnInit(): void {
    this.store.dispatch(getUserAction())
  }
}
