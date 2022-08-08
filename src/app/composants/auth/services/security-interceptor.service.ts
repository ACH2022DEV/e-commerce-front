import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToForward = req;
    const session: any = sessionStorage.getItem('session');
    if (session) {
      const accessToken = JSON.parse(session)['accessToken'];
      requestToForward = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + accessToken
        }
      });
    }
    return next.handle(requestToForward).pipe(map((event: HttpEvent<any>) => {
      return event;
    }));
  }
}
