import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';
import { Details } from '../models/detail';
import { Article } from '../models/article';
import { Facture } from '../models/facture';
import { Devis } from '../models/devis';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private url = "http://localhost:8080/e-commerce-back/api/v1";

  constructor(private http: HttpClient) { }

//les api de personne//
  public getAllPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.url}/personne`);

  }
  public getPersonne(id: number): Observable<Personne> {

    return this.http.get<Personne>(`${this.url}/personne/${id}`);

  }
  public addPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(`${this.url}/personne`, personne);

  }
  public UpdatePersonne( personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.url}/personne`, personne);
  }
  
  public deletePersonne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/personne/${id}`);

  }
  //les api de details
  public getAllDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(`${this.url}/details`);

  }
  public getDetails(id: number): Observable<Details> {

    return this.http.get<Details>(`${this.url}/details/${id}`);

  }
  public addDetails(det: Details): Observable<Details> {
    return this.http.post<Details>(`${this.url}/details`, det);

  }
  public UpdateDetails( detail: Details): Observable<Details> {
    return this.http.put<Details>(`${this.url}/details`, detail);

  }
  public deleteDetails(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/details/${id}`);

  }
  //les api d'aticles
  public getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}/article`);

  }
  public getarticle(id: number): Observable<Article> {

    return this.http.get<Article>(`${this.url}/article/${id}`);

  }
  public addarticle(articl: Article): Observable<Article> {
    return this.http.post<Article>(`${this.url}/article`, articl);

  }
  public Updatearticle( articl: Article): Observable<Article> {
    return this.http.put<Article>(`${this.url}/article`, articl);

  }
  public deletearticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/article/${id}`);

  }
  ///les apis des factures
  public getAllfactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.url}/facture`);

  }
  public getfacture(id: number): Observable<Facture> {

    return this.http.get<Facture>(`${this.url}/facture/${id}`);

  }
  public addfacture(fact: Facture): Observable<Facture> {
    return this.http.post<Facture>(`${this.url}/facture`, fact);

  }
  public Updatefacture(fact: Facture): Observable<Facture> {
    return this.http.put<Facture>(`${this.url}/facture`, fact);

  }
  public deletefacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/facture/${id}`);

  }
  //les apis de devis

  public getAllDevis(): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.url}/devis`);

  }
  public getdevis(id: number): Observable<Devis> {

    return this.http.get<Devis>(`${this.url}/devis/${id}`);

  }
  public adddevis(fact: Devis): Observable<Devis> {
    return this.http.post<Devis>(`${this.url}/devis`, fact);

  }
  public Updatedevis( dev: Devis): Observable<Devis> {
    return this.http.put<Devis>(`${this.url}/devis`, dev);

  }
  public deletedevis(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/devis/${id}`);

  }

  // développer une méthode qui va appeler le controleur et qui permet de retourner une personne 
}
