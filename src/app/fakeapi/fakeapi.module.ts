import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FakeapiComponent } from './components/fakeapi/fakeapi.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { fakeApiReducer } from './store/reducers/fakeapi.reducer'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { FakeApiEffect } from './store/effects/fakeApi.effects'

@NgModule({
  declarations: [FakeapiComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'fakeapi',
        component: FakeapiComponent,
      },
    ]),
    StoreModule.forFeature('fakeApi', fakeApiReducer),
    EffectsModule.forFeature([FakeApiEffect]),
  ],
})
export class FakeapiModule { }
