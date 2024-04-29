import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from '../models/registerRequest.interface'
import { Observable, map } from 'rxjs'
import { CurrentUserInterface } from '../../../shared/models/currentUser.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { AuthResponseInterface } from '../../../shared/models/authResponse.interface'
import { LoginRequestInterface } from '../models/loginRequest.interface'
import { AuthStateInterface } from '../models/authState.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }
  public register(
    data: RegisterRequestInterface,
  ): Observable<CurrentUserInterface> {
    console.log('data', data)
    return this.http
      .post<AuthResponseInterface>(environment.apiUrl + '/users', data)
      .pipe(map(this.getUser))
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(environment.apiUrl + '/users/login', data)
      .pipe(map(this.getUser))
  }
}
