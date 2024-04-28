import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { counterValueSelector } from '../../store/selectors/counter.selector'
import { incrementAction } from '../../store/actions/increment.action'
import { decrementAction } from '../../store/actions/decrement.action'
import { AppStateInterface } from '../../../../shared/models/appState.interface'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public value$ = this.store.pipe(select(counterValueSelector))

  constructor(private store: Store<AppStateInterface>) { }

  public increment() {
    this.store.dispatch(incrementAction())
  }

  public decrement() {
    this.store.dispatch(decrementAction())
  }
}
