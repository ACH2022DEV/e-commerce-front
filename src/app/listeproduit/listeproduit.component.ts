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
  public total: Array<number> | undefined;
  public page:number=0;
  public size:number=5;
  public searchText:string='';
  //pop up 
 public popoverTitle :string= 'Confirmation';
 public popoverMessage :string= 'Are you sure?';
 confirmClicked = false;
 cancelClicked = false;
 //
  constructor(private produitService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }
  public getAllProduits(): void {
    this.produitService.getAllArticles(this.page,this.size).subscribe((data:any) => {
      this.produits = data['content'];
      this.total =new Array(data['totalPages']);
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
  setPage(i: number,event:any){
    this.page = i;
    this.getAllProduits();
}
public searchTerm(f:any){

}
}
