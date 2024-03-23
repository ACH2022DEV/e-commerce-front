import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtPayload, jwtDecode } from "jwt-decode";
import * as CryptoJS from 'crypto-js';



@Injectable({
  providedIn: 'root'
})
export class SecurityInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestToForward = req;
    let session:string |any="";
    //let cookiesdata=this.getCookie('ACCOUNT_CHOOSER');
    //console.log("document.cookie "+document.cookie);
    session=sessionStorage.getItem('session');
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
  // Méthode pour récupérer le cookie par son nom
  /*  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  } */
 /*  private getCookie(): string | null {
  const cookies = document.cookie.split(';');
  //console.log("cookies"+cookies);
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === 'APISID') {
      return cookieValue;
    }
  }
  return null;
} */
 cookies = document.cookie;
 getCookie(name: string): string | null {
  const cookieName = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}


}


