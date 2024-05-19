import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { FakeapiComponent } from './fakeapi.component'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { fakeApiReducer } from '../../store/reducers/fakeapi.reducer'
import { By } from '@angular/platform-browser'
import { EffectsModule, EffectsRootModule } from '@ngrx/effects'
import { FakeApiEffect } from '../../store/effects/fakeApi.effects'
import { FakeapiService } from '../../services/fakeapi.service'
import { HttpClientModule } from '@angular/common/http'
import { first } from 'rxjs'

describe('FakeapiComponent', () => {
  let component: FakeapiComponent
  let fixture: ComponentFixture<FakeapiComponent>
  let service: FakeApiEffect

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('fakeApi', fakeApiReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([FakeApiEffect]),
      ],
      declarations: [FakeapiComponent],
      providers: [FakeApiEffect],
    }).compileComponents()

    fixture = TestBed.createComponent(FakeapiComponent)
    component = fixture.componentInstance
    service = TestBed.inject(FakeApiEffect)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /**  xit('should get comment by clicking on the get comment btn', async () => {
    let getCommentBtn = fixture.debugElement.query(By.css('#get-comment'))
    service.getCommentEffect$.subscribe((res: any) => {
      console.log('hello from test', res)
    })
    getCommentBtn.nativeElement.click()
    fixture.detectChanges()

    await new Promise((res) => {
      setTimeout(() => {
        res('ok')
      }, 1000)
    })
    fixture.detectChanges()

    let email = fixture.debugElement.query(By.css('#email'))
    fixture.detectChanges()

    expect(email.nativeElement.textContent).toBe('Eliseo@gardner.biz')
  }) */

  it('should get comment by clicking on the get comment btn', (done) => {
    let getCommentBtn = fixture.debugElement.query(By.css('#get-comment'))
    service.getCommentEffect$.subscribe((res: any) => {
      fixture.detectChanges()

      let email = fixture.debugElement.query(By.css('#email'))
      console.log(res.comment.postId)

      expect(email.nativeElement.textContent).toBe('Eliseo@gardner.biz')
      //###expect(res.comment.postId).toBe(1)
      done()
    })
    getCommentBtn.nativeElement.click()
    fixture.detectChanges()
  })
})
