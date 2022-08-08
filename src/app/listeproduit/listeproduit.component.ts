import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {
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
  public deletePRODUIT(id:number):void{
    this.pesonneService.deletearticle(id).subscribe(data=>{
      this.getAllProduits();
    }
      )
  }

}
