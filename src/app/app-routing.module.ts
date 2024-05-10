import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './main/components/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
