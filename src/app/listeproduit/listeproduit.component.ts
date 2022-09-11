import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.scss']
})
export class ListeproduitComponent implements OnInit {
  public produits:Article[]= [];
  constructor(private produitService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }
  public getAllProduits(): void {
    this.produitService.getAllArticles().subscribe(data => {
      this.produits = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  public deletePRODUIT(id:number):void{
    this.produitService.deletearticle(id).subscribe(data=>{
      this.getAllProduits();
    }
      )
  }

}
