
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../composants/auth/services/security.service';
import { Panier } from '../models/panier';

import { Personne } from '../models/personne';
import { PanierService } from '../panier/panier.service';
import { SearchService } from '../produits/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  helper: any;
  public monpanier: Panier[] = [];
  public nombredeprod: any;
  //obje:any={}
//search
public searchText:string='';
public results:any=[];
public size=1000;
public page=0;


//

  jsonStringObj: any = {};
  obj: any = { email: '', username: '', id: '', roles: '' };
  constructor(private search:SearchService,private route: ActivatedRoute,private router: Router, private panierService: PanierService) {

    this.getAllPaniers()
    // this.nombredeprod=this.monpanier.length;
    console.log(this.nombredeprod)
    this.nombredeprod;


  }

  ngOnInit(): void {

  }
 




  ////

  public getAllPaniers(): void {
    this.panierService.getAllPanier().subscribe(data => {
      this.monpanier = data;
      this.nombredeprod = this.monpanier.length;
      this.getAllPaniers();


      // console.log(this.monpanier.length)
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  //
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
      console.log(key[0])
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
      console.log(key[0])
      if (key[0] == 'ROLE_ADMIN') {
        return true
      }

      return false;


    } else {

      return false;
    }
  }


}
