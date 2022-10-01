import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url = "http://localhost:8080/e-commerce-back/api/v1/article";
  private url2 = "http://localhost:8080/e-commerce-back/api/v1/personne";


  constructor(private http: HttpClient) { }
  public Search(pageNo:number,size:number,search:string): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.url}/search?page=${pageNo}&size=${size}&search=${search}`);
  }
  public SearchPersonne(pageNo:number,size:number,searchPersonne:string): Observable<Personne[]>{
    return this.http.get<Personne[]>(`${this.url2}/search?page=${pageNo}&size=${size}&search=${searchPersonne}`);
  }
}
