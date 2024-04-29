import {ComponentFixture, TestBed} from '@angular/core/testing'

import {HttpClientTestingModule} from '@angular/common/http/testing'
import {provideMockStore} from '@ngrx/store/testing'
import {FakeapiComponent} from './fakeapi.component'
import {FormsModule} from '@angular/forms'

describe('FakeapiComponent', () => {
  let component: FakeapiComponent
  let fixture: ComponentFixture<FakeapiComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],

      declarations: [FakeapiComponent],
      providers: [provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(FakeapiComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
