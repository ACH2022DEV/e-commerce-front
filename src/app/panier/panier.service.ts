import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createPanier } from '../models/createPanier';
import { Panier } from '../models/panier';
import { Personne } from '../models/personne';

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
  public addPanier(panier:createPanier): Observable<createPanier> {
    return this.http.post<createPanier>(`${this.url}`, panier);

  }
  /* public UpdatePanier( panier: Panier): Observable<Panier> {
    return this.http.put<Panier>(`${this.url}`, panier);
  } */
  
  public deletePanier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);

  }
}
