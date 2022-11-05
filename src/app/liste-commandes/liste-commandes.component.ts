import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommandesService } from '../commandes.service';
import { Commandes } from '../models/commande';
import { Picture } from '../models/mesImages';
import { Personne } from '../models/personne';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
  public personne:any;
  jsonStringObj:any={};
public client:Personne={id:0,nom:'string',prenom:'string',avis:{}as any,  adress:'string', tel:'', username:'string', email:'string', password:'', paniers:{}as any, images:{}as any, cammandes:{}as any};
obj: any={email:'',username:'',id:'',roles:''};
public ID:any;
public TotalParProduit=0;
  constructor(private commandeService:CommandesService ,private personneService:DatabaseService , private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
   
    if(sessionStorage.getItem('session')){
      this.jsonStringObj = sessionStorage.getItem('session'); 
      console.log('jsonStringObj',this.jsonStringObj)
      this.obj = JSON.parse(this.jsonStringObj);
      console.log('objpersonne',this.obj) 
    this.ID=this.obj.id;
    console.log('id',this.ID)
    }
   this.personneService.getPersonne(this.ID).subscribe(data=>{
      this.personne=data;
      this.personne.cammandes.map((index: { quantity: number; article: { prix: number; }; }) => {
        this.TotalParProduit+=index.quantity*index.article.prix;
      });
     
      console.log('client list',data)})
     
    
  }
 public deleteCommande(id:number){
this.commandeService.deleteCommande(id).subscribe(data=>{
  this.personneService.getPersonne(this.ID).subscribe(data=>{
    this.personne=data;
    console.log('client list',data)})
   

})
 }
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }
}
