import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CreatePanier } from '../models/createPanier';
import { Picture } from '../models/mesImages';
import { Panier } from '../models/panier';
import { Personne } from '../models/personne';
import { DatabaseService } from '../services/database.service';
import { PanierService } from './panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public nombredeprod: any;
  public Montant: number = 0;
  public panierVide:boolean=false;
  //for panier
  public client:Personne={id:0,nom:'string',prenom:'string',avis:{}as any,  adress:'string', tel:'', username:'string', email:'string', password:'', paniers:{}as any, images:{}as any};
public ID:any;
public SousTotal:any=0;
//
//public quantity:number=1;
  jsonStringObj: any = {};
  obj: any = { email: '', username: '', id: '', roles: '' };

  //fin for panier
  constructor(private personne: DatabaseService,private panierService: PanierService, private sanitizer: DomSanitizer) {
   
   }

  ngOnInit(): void {
  this.panierVide;
 //get personne(panier)
 if(sessionStorage.getItem('session')){
  this.jsonStringObj = sessionStorage.getItem('session'); 
  console.log('jsonStringObj',this.jsonStringObj)
  this.obj = JSON.parse(this.jsonStringObj);
  console.log('obj',this.obj) 
this.ID=this.obj.id;
console.log('id',this.ID)
}
this.personne.getPersonne(this.ID).subscribe(data=>{
  this.client=data;
  this.nombredeprod = this.client.paniers.length;
  this.client.paniers.map(index=>{
    this.SousTotal+=index.article.prix*index.quantity;
  })
  if(this.nombredeprod==0){
    this.panierVide=true;
  }
 // this.client2=data;
  console.log('client header',data)})
 
 this.panierVide;
    
  }
 
  public deleteArticle(id: number) {
    this.panierService.deletePanier(id).subscribe(data => {
      this.personne.getPersonne(this.ID).subscribe(data=>{
        this.client=data;
        this.nombredeprod = this.client.paniers.length;
     
        console.log('client header',data)})
    })
  }
 
  //ajouter les images
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }

 
 /* public dimuner(quantity:number){
 this.quantity=quantity--;
  }
 */
}
