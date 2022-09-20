import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePanier } from '../models/createPanier';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private url = "http://localhost:8080/e-commerce-back/api/v1/panier";

  constructor(private http: HttpClient) { }



  public getAllPanier(): Observable<Panier[]> {
    return this.http.get<Panier[]>(`${this.url}`);

  }
  public getPanier(id: number): Observable<Panier> {

    return this.http.get<Panier>(`${this.url}/${id}`);

  }
  public addPanier(panier: CreatePanier): Observable<CreatePanier> {
    return this.http.put<CreatePanier>(`${this.url}`, panier);

  }
  /* public UpdatePanier( panier: Panier): Observable<Panier> {
    return this.http.put<Panier>(`${this.url}`, panier);
  } */

  public deletePanier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);

  }
}
