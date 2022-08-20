import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  public produits:Article[]= [];
  constructor(private pesonneService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }
  public getAllProduits(): void {
    this.pesonneService.getAllArticles().subscribe(data => {
      this.produits = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
