import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {PersistanceService} from '../../../shared/services/persistance.service'
import {environment} from '../../../../environments/environment'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistance: PersistanceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.persistance.get('accessToken')
    const newReq = req.clone({
      url: 'https://api.realworld.io/api/user',
      setHeaders: {
        authorization: token ? `Token ${token}` : '',
        Bearer: token ? `Token ${token}` : '',
      },
    })

    return next.handle(newReq)
  }
}
