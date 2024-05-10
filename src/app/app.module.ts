import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { NotFoundModule } from './not-found/not-found.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { CounterModule } from './counter/counter.module'
import { EffectsModule } from '@ngrx/effects'
import { FakeapiModule } from './fakeapi/fakeapi.module'
import { TopbarModule } from './shared/topbar/topbar.module'
import { MainModule } from './main/main.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    TopbarModule,
    AuthModule,
    CounterModule,
    FakeapiModule,
    NotFoundModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production,
      trace: !environment.production,
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule { }
