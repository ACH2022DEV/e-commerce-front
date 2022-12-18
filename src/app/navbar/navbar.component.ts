
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../composants/auth/services/security.service';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { Picture } from '../models/mesImages';
import { Panier } from '../models/panier';

import { Personne } from '../models/personne';
import { PanierService } from '../panier/panier.service';
import { SearchService } from '../produits/search.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  helper: any;
 // public monpanier: Panier[] = [];
  public contacts:Contact[]=[]
  public nombredeprod: any;
  public nombreContact: any;
  public deconnecter:boolean=true;
  //obje:any={}
//search
public searchText:string='';
public results:any=[];
public size=1000;
public page=0;

public client:Personne={id:0,nom:'string',prenom:'string',avis:{}as any,  adress:'string', tel:'', username:'string', email:'string', password:'', paniers:{}as any, images:{}as any, cammandes:{}as any};
public ID:any;
//

  jsonStringObj: any = {};
  obj: any = { email: '', username: '', id: '', roles: '' };
  constructor(private personne: DatabaseService,private search:SearchService, private sanitizer: DomSanitizer,private route: ActivatedRoute,private contactService:ContactService,private router: Router, private panierService: PanierService) {
   
    this.getAllContact();
   // this.nombredeprod;
    this.nombreContact;
 
  }

  ngOnInit(): void {
   this.nombredeprod;
   this.nombreContact;
   //get personne
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
   // this.client2=data;
    console.log('client header',data)})
  
   //fin get personne
  }
  public getAllContact(): void {
    this.contactService.getAllContact().subscribe(data => {
      this.contacts = data;
      this.nombreContact= this.contacts.length;
      this.getAllContact();


    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
 
  public logout() {

    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  public loggedIn() {
    return sessionStorage.getItem('session');
  }

  public getAccestouser(): boolean {

    this.jsonStringObj = sessionStorage.getItem('session');
    if (this.jsonStringObj) {
      this.obj = JSON.parse(this.jsonStringObj);
      let key: any = this.obj.roles;
      return key[0] == 'ROLE_USER';
    }
    return false;

  }


  public getAccestoEmploye(): boolean {
    if (sessionStorage.getItem('session')) {
      this.jsonStringObj = sessionStorage.getItem('session');
      this.obj = JSON.parse(this.jsonStringObj);
      let key: any = this.obj.roles;
      //console.log(key[0])
      if (key[0] == 'ROLE_GERANT') {
        return true
      }

      return false;


    } else {

      return false;
    }
  }
  public getAccestoAdmin(): boolean {
    if (sessionStorage.getItem('session')) {
      this.jsonStringObj = sessionStorage.getItem('session');
      this.obj = JSON.parse(this.jsonStringObj);
      let key: any = this.obj.roles;
     // console.log(key[0])
      if (key[0] == 'ROLE_ADMIN') {
        return true
      }

      return false;


    } else {

      return false;
    }
  }
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }

}
