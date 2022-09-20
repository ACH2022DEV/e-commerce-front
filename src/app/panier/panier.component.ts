import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CreatePanier } from '../models/createPanier';
import { Picture } from '../models/mesImages';
import { Panier } from '../models/panier';
import { PanierService } from './panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public monpanier: Panier[] = [];
  public lepanier: CreatePanier[] = [];
  public nombredeprod: any;
  public Montant: number = 0;
  constructor(private panierService: PanierService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllPaniers();
    this.getTotal();
    console.log( this.Montant)


    
  }
  public getAllPaniers(): void {
    this.panierService.getAllPanier().subscribe(data => {
      this.monpanier = data;
      this.nombredeprod = this.monpanier.length;

      //console.log(this.monpanier.length)
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  public deleteArticle(id: number) {
    this.panierService.deletePanier(id).subscribe(data => {
      this.getAllPaniers();
    })
  }
  //ajouter au panier
  public ajouterAuPanier(f: any) {
    let data: CreatePanier = f.value;
    // un objet avec une personne et une liste de panier 
    this.panierService.addPanier(data).subscribe(data => {
      this.lepanier = new Array<CreatePanier>();
      this.lepanier.push(data);
      console.log(data)
     

    }
    )
  }
  //
  //ajouter les images
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }

  public getTotal(): any {
  
 if(this.monpanier){
  this.Montant=0;
  this.monpanier.forEach((item)=>{
    this.Montant+=(item.article.quantite*item.article.prix);

  });
 return this.Montant;
}}


}
