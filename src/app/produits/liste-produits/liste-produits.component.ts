import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/avis.service';
import { Article } from 'src/app/models/article';
import { CreatePanier } from 'src/app/models/createPanier';
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
  public lepanier: CreatePanier[] = [];
  public total: Array<number> | undefined;
  public page: number = 0;
  public size: number = 8;
  public monpanier:Panier[]=[];

  public poductExist:boolean=false;
  jsonStringObj: any = {};

  obj: any = { email: '', username: '', id: '', roles: '' };
  public key: any;
  //public keyword:any;
  public quantity:number=1;
  public produitItem:any;
  public code:any;
  public prodi:boolean=false;
 // public disabled:boolean=false;
  constructor(private produitService: DatabaseService, private sanitizer: DomSanitizer, private panierService: PanierService,
    private fb: FormBuilder, private avisClient: AvisService) {
     //verifier
     for(let i in this.monpanier){
      if(this.monpanier[i].article.codeArticle==this.code.paniers.codeArticle){
        this.monpanier[i].article.quantite++;
        this.poductExist=true;
      }
        else{
          this.poductExist=false;
        }
        }


     ///
    this.jsonStringObj = sessionStorage.getItem('session');

    this.obj = JSON.parse(this.jsonStringObj);
    this.key = this.obj.id;
    console.log(this.key)

  }

  ngOnInit(): void {
    this.getAllProduits();

  }



  /////

  //ajouter au panier
  public ajouterAuPanier(f: any) {
    console.log('le nouveau panier',f.value)
    let data: CreatePanier = {}as any;
      console.log(data)
      data.idPersonne=f.value.idPersonne;
      data.paniers={}as any;
      data.paniers.codeArticle=f.value.codeArticle;
      data.paniers.quantity=f.value.quantity;
      this.code=data.paniers.codeArticle;

      this.panierService.addPanier(data).subscribe(data => {
          this.lepanier = new Array<CreatePanier>();
         
             this.lepanier.push(data);
            
          
         
        })
      }
        
            
     
   
        
     
  
     //product exist or not
    /*  public ajout(){
     for(let i in this.monpanier){
      if(this.monpanier[i].article.codeArticle==this.code.paniers.codeArticle){
        this.monpanier[i].article.quantite++;}
        else{
          this. ajouterAuPanier(this.code.paniers.codeArticle);
        }
        }
      } */
      
  ///////
 //getPanier

 public getAllPaniers(): void {
  this.panierService.getAllPanier().subscribe(data => {
    this.monpanier = data;
   

    //console.log(this.monpanier.length)
  },
    (error: HttpErrorResponse) => alert(error.message)
  );
}


 ///

  //afficher les produits
  public getAllProduits(): void {
    this.produitService.getAllArticles(this.page, this.size).subscribe((data: any) => {
      this.produits = data['content'];
      console.log(data);
      this.total = new Array(data['totalPages']);
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }
  setPage(i: number, event: any) {
    this.page = i;
    this.getAllProduits();
  }




}
