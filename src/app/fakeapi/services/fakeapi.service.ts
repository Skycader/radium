import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CommentInterface } from '../models/fakeapi.interface'

@Injectable({
  providedIn: 'root',
})
export class FakeapiService {
  constructor(private http: HttpClient) { }

  public getComment(id: number): Observable<CommentInterface> {
    return this.http.get<CommentInterface>(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
    )
  }
}
