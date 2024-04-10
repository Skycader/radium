import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterComponent } from './components/counter/counter.component'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { counterReducer } from './store/reducers/counter.reducer'

const routes: Routes = [{ path: 'counter', component: CounterComponent }]
@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class CounterModule { }
