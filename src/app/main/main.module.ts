import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainLayoutComponent } from './components/main-layout/main-layout.component'

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule],
  exports: [MainLayoutComponent],
})
export class MainModule { }
