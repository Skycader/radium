import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CounterComponent } from './counter.component'
import { provideMockStore } from '@ngrx/store/testing'
import { By } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { counterReducer } from '../../store/reducers/counter.reducer'

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('counter', counterReducer),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  /**
   * NGRX
   */
  it('should have NGRX counter value as 0 in the start position', () => {
    let counterValue = fixture.debugElement.query(By.css('#ngrx-counter-value'))
    expect(counterValue.nativeElement.textContent).toBe('0')
  })

  it('should increase the NGRX counter value by +1 on click the increase button', () => {
    let counterValue = fixture.debugElement.query(By.css('#ngrx-counter-value'))
    let incrementBtn = fixture.debugElement.query(By.css('#ngrx-increment-btn'))
    incrementBtn.nativeElement.click()
    fixture.detectChanges()

    expect(counterValue.nativeElement.textContent).toBe('1')
  })

  it('should have counter value as 0 in the start position', () => {
    let counterValue = fixture.debugElement.query(By.css('#counter-value'))
    expect(counterValue.nativeElement.textContent).toBe('0')
  })

  it('should increase the counter value by +1 on click the increase button', () => {
    let counterValue = fixture.debugElement.query(By.css('#counter-value'))
    let incrementBtn = fixture.debugElement.query(By.css('#increment-btn'))
    incrementBtn.nativeElement.click()
    fixture.detectChanges()

    expect(counterValue.nativeElement.textContent).toBe('1')
  })

  it('should increase the counter value by -1 on click the increase button', () => {
    let counterValue = fixture.debugElement.query(By.css('#counter-value'))
    let decrementBtn = fixture.debugElement.query(By.css('#decrement-btn'))
    decrementBtn.nativeElement.click()
    fixture.detectChanges()

    expect(counterValue.nativeElement.textContent).toBe('-1')
  })
})
