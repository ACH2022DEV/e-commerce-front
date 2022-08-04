import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../Personne';
import { DatabaseService } from '../services/database.service';
import { article } from '../Article';
import { devis } from '../DEVIS';
import { details } from '../Detail';
import { facture } from '../facture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  personnes : Personne[] = [];
  public articles:article[]=[];
  public devi:devis[]=[];
  public detail:details[]=[];
  public factures:facture[]=[];
  //public personne: any = { id: '', adress: '', nom: '', prenom: '', tel: '' };
    // public personne:any;
  
 // id:any;
  


  // dans le constructeur : injecter le service 
  constructor(private pesonneService: DatabaseService) {

  }

  // créer une méthde qui permet d'appeler le service et appeler donc le controller 
  // par la suite afficher les info de l'utilisateur dans l'ihm

  ngOnInit(): void {
    
    this.getAllPersonne();
    //this.id=this.route.snapshot.params['id'];
      this.getAlldetails();
     this.getAllFACtures();
      this.getAllarticles();
      
  }
///les méthode de personne
  public getAllPersonne(): void {
    this.pesonneService.getAllPersonne().subscribe(data => {
      this.personnes = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  public DeletePersonne(id:number):void{
    this.pesonneService.deletePersonne(id).subscribe(data=>{
      this.getAllPersonne();
    }
      )
  }
///les methode des details
public getAlldetails(): void {
  this.pesonneService.getAllDetails().subscribe(data => {
    this.detail = data;
  },
    (error: HttpErrorResponse) => alert(error.message)
  );
}
public DeleteDetails(id:number):void{
  this.pesonneService.deleteDetails(id).subscribe(data=>{
    this.getAlldetails();
  }
    )
}
//les méthodes des articles
public getAllarticles(): void {
  this.pesonneService.getAllArticles().subscribe(data => {
    this.articles = data;
  },
    (error: HttpErrorResponse) => alert(error.message)
  );
}
public DeletEARTICLES(id:number):void{
  this.pesonneService.deletearticle(id).subscribe(data=>{
    this.getAllarticles();
  }
    )
}
///LES METHODES DES FACTURES
public getAllFACtures(): void {
  this.pesonneService.getAllfactures().subscribe(data => {
    this.factures = data;
  },
    (error: HttpErrorResponse) => alert(error.message)
  );
}
public Deletfactures(id:number):void{
  this.pesonneService.deletefacture(id).subscribe(data=>{
    this.getAllFACtures();
  }
    )
}




























  /*public UpdatePersonne(f:any){
    let data=f.value;
    this.pesonneService.UpdatePersonne(this.personne.id,data).subscribe(
      data=>{
        this.personnes = new Array<Personne>();
        this.goToLIst();
      }
    )
  }
  public goToLIst(){
    this.router.navigate(['/personne']);
  }*/
  

}



