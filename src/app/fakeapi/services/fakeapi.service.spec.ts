import {TestBed} from '@angular/core/testing'

import {FakeapiService} from './fakeapi.service'
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('FakeapiService', () => {
  let service: FakeapiService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(FakeapiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
