import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/avis.service';
import { Article } from 'src/app/models/article';
import { createPanier } from 'src/app/models/createPanier';
import { Picture } from 'src/app/models/mesImages';
import { Panier } from 'src/app/models/panier';
import { PanierService } from 'src/app/panier/panier.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  public produits: Article[] = [];
  public lepanier:createPanier[]=[];
  //pour l'etoile
  //public form: FormGroup;
 // rating3:number;
 ///
 jsonStringObj:any={};
     
 obj: any={email:'',username:'',id:'',roles:''};
 public key:any;

  constructor(private produitService: DatabaseService, private sanitizer: DomSanitizer,private  panierService:PanierService ,
    private fb: FormBuilder,private avisClient:AvisService) { 
      
    /*   this.form = this.fb.group({
        rating: ['', Validators.required],
      }) */
///get idpersonne
this.jsonStringObj = sessionStorage.getItem('session'); 
  
this.obj = JSON.parse(this.jsonStringObj); 
 this.key=this.obj.id;
console.log(this.key)
    }

  ngOnInit(): void {
    this.getAllProduits();
    
  }
 


  /////
  
  //ajouter au panier
  public ajouterAuPanier(f:any) {
    let data=f.value;
    this.panierService.addPanier(data).subscribe(data=>{
      this.lepanier = new Array<createPanier>();
      this.lepanier.push(data);

    }
      )
  }
 
  //afficher les produits
  public getAllProduits(): void {
    this.produitService.getAllArticles().subscribe(data => {
      this.produits = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  convertBase64ToImage(images: Picture[]): any {
    
    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if(images.length > 0){
      base64 =  "data:image/png;base64, "+ images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }

  //les etoiles 
  
 
}
