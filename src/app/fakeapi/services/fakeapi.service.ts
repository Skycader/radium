import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FakeapiService {
  constructor(private http: HttpClient) {}

  public getComment(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
  }
}
