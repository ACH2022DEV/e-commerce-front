import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/models/personne';
import { Login } from '../../../models/login';
import { Register } from '../../../models/register';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private url1 = "http://localhost:8080/e-commerce-back/api/v1/auth";
 
  constructor(private http: HttpClient) { }

  
  public login(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.url1}/login`, login);

  }
  public register(register: Register): Observable<Register> {
    return this.http.post<Register>(`${this.url1}/register`, register);

  }
  
 
  

}
