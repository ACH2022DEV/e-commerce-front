import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/avis.service';
import { Avis } from 'src/app/models/avis';
import { CreateAvis } from 'src/app/models/createAvis';
import { Picture } from 'src/app/models/mesImages';
import { PanierService } from 'src/app/panier/panier.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.css']
})
export class ProduitsDetailsComponent implements OnInit {
  public produit: any = { codeArticle: '' };
  public lesAvis:Avis[]=[];
  public nouveauAvis:CreateAvis[]=[];
  jsonStringObj:any={};
  public form: FormGroup;
 obj: any={email:'',username:'',id:'',roles:''};
 public key:any;
  

  constructor(private produitService: DatabaseService, private route: ActivatedRoute, private sanitizer: DomSanitizer,
    private router: Router,private avisService:AvisService,   private fb: FormBuilder) {
      //L'étoile
      this.form = this.fb.group({
        rating: ['', Validators.required],
       
          
         
       
      })
      
      ///get idpersonne
this.jsonStringObj = sessionStorage.getItem('session'); 
  
this.obj = JSON.parse(this.jsonStringObj); 
 this.key=this.obj.id;
console.log(this.key)

     }

  ngOnInit(): void {
    this.produitService.getarticle(this.route.snapshot.params['codeArticle']).subscribe(data => {
      this.produit = data;
 

  })
  }
  //Afficher les Avis de client
public getAllAvis():void{
  this.avisService.getAllAvis().subscribe(data=>{
    this.lesAvis=data;
  },
  (error: HttpErrorResponse) => alert(error.message)
);
}

  ////////////////////////////////
//ajouter un avis d'un client
public ajouterVotreAvis(f:any){
  let data=f.value;
  this.avisService.addAvis(data).subscribe(data=>{
    this.nouveauAvis=new Array<CreateAvis>();
    //console.log(data)
    this.nouveauAvis.push(data);
   
  })

}


///



  lecodeArticle:number=this.produit.codeArticle;
  

  
  convertBase64ToImage(images:Picture[]): any {
    
 //the first try
     let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
   
     /* if(this.produit[this.lecodeArticle].images.length > 0){
      for(let i=0;i<this.produit[this.lecodeArticle].images.id;i++){
         base64 =  "data:image/png;base64, "+images[i].picbyte;
    }
     
     }  */
    
 //the second try()
for(let i=this.lecodeArticle;i <this.produit.codeArticle.length;i++){
  for(let j=1;j <this.produit[i].images.id;j++){
     base64 =  "data:image/png;base64,"+this.produit.codeArticle[i].image[j].picbyte;
     console.log( base64)}
    
 
  
 }  

 //the third try
/* for(let i=this.lecodeArticle;i <this.produit.length;i++){
  for(let j=this.produit.images.length;j <this.produit[i].images;j++){
 
    base64 =  "data:image/png;base64, "+ this.produit[i].images[j].picbyte;

  
 }} */
 

    return this.sanitizer.bypassSecurityTrustUrl(base64);
  
  }

}
