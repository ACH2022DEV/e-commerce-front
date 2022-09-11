import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { createPanier } from '../models/createPanier';
import { Panier } from '../models/panier';
import { PanierService } from './panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
    public monpanier:Panier[]=[];
    public lepanier:any=[];
  constructor( private panierService:PanierService) { }

  ngOnInit(): void {
   this.getAllPaniers();
  }
  public getAllPaniers():void{
    this.panierService.getAllPanier().subscribe(data=>{
          this.monpanier=data;
         

          //console.log(this.monpanier.length)
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
    }
    public deleteArticle(id:number){
      this.panierService.deletePanier(id).subscribe(data=>{
        this.getAllPaniers();
      })
    }
    //ajouter au panier
  public ajouterAuPanier(f:any) {
    let data=f.value;
    this.panierService.addPanier(data).subscribe(data=>{
      this.lepanier = new Array<createPanier>();
      this.lepanier=data;

    }
      )
  }

}
