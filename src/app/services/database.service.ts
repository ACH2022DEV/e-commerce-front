import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../Personne';
import { details } from '../Detail';
import { article } from '../Article';
import { facture } from '../facture';
import { devis } from '../DEVIS';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private url = "http://localhost:8080/e-commerce-back/v1/api";

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
  public UpdatePersonne(id: number, personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.url}/personne/${id}`, personne);

  }
  public deletePersonne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/personne/${id}`);

  }
  //les api de details
  public getAllDetails(): Observable<details[]> {
    return this.http.get<details[]>(`${this.url}/details`);

  }
  public getDetails(id: number): Observable<details> {

    return this.http.get<details>(`${this.url}/details/${id}`);

  }
  public addDetails(det: details): Observable<details> {
    return this.http.post<details>(`${this.url}/details`, det);

  }
  public UpdateDetails(id: number, detail: details): Observable<details> {
    return this.http.put<details>(`${this.url}/details/${id}`, detail);

  }
  public deleteDetails(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/details/${id}`);

  }
  //les api d'aticles
  public getAllArticles(): Observable<article[]> {
    return this.http.get<article[]>(`${this.url}/article`);

  }
  public getarticle(id: number): Observable<article> {

    return this.http.get<article>(`${this.url}/article/${id}`);

  }
  public addarticle(articl: article): Observable<article> {
    return this.http.post<article>(`${this.url}/article`, articl);

  }
  public Updatearticle(id: number, articl: article): Observable<article> {
    return this.http.put<article>(`${this.url}/article/${id}`, articl);

  }
  public deletearticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/article/${id}`);

  }
  ///les apis des factures
  public getAllfactures(): Observable<facture[]> {
    return this.http.get<facture[]>(`${this.url}/facture`);

  }
  public getfacture(id: number): Observable<facture> {

    return this.http.get<facture>(`${this.url}/facture/${id}`);

  }
  public addfacture(fact: article): Observable<facture> {
    return this.http.post<facture>(`${this.url}/facture`, fact);

  }
  public Updatefacture(id: number, fact: facture): Observable<facture> {
    return this.http.put<facture>(`${this.url}/facture/${id}`, fact);

  }
  public deletefacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/facture/${id}`);

  }
  //les apis de devis

  public getAllDevis(): Observable<devis[]> {
    return this.http.get<devis[]>(`${this.url}/devis`);

  }
  public getdevis(id: number): Observable<devis> {

    return this.http.get<devis>(`${this.url}/devis/${id}`);

  }
  public adddevis(fact: devis): Observable<devis> {
    return this.http.post<devis>(`${this.url}/devis`, fact);

  }
  public Updatedevis(id: number, dev: devis): Observable<devis> {
    return this.http.put<devis>(`${this.url}/devis/${id}`, dev);

  }
  public deletedevis(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/devis/${id}`);

  }

  // développer une méthode qui va appeler le controleur et qui permet de retourner une personne 
}
