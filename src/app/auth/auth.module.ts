import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AuthComponent} from './components/auth/auth.component'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducer'

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducer),
  ],
})
export class AuthModule {}
