
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../composants/auth/services/security.service';

import { Personne } from '../models/personne';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  helper: any;
 
  jsonStringObj:any={};
  obj: any={email:'',username:'',id:'',roles:''};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
   public logout(){
  
    sessionStorage.clear();
     this.router.navigate(['/login']);
    } 
    public loggedIn(){
      return  sessionStorage.getItem('session');
    }
    public  getAccestouser():boolean{
     
        this.jsonStringObj = sessionStorage.getItem('session'); 
        this.obj = JSON.parse(this.jsonStringObj); 
        let key:any=this.obj.roles;
       
        if(key[0]=='ROLE_USER'){
          return true
        }
       
    
      else {
       
        return false;
         }  
     } 

  
     public  getAccestoEmploye():boolean{
      if(sessionStorage.getItem('session') ){
        this.jsonStringObj = sessionStorage.getItem('session'); 
        this.obj = JSON.parse(this.jsonStringObj); 
        let key:any=this.obj.roles;
        console.log(key[0])
        if(key[0]=='ROLE_GERANT'){
          return true
        }
        
        return false;
      
    
      }else {
       
        return false;
         }  
     } 
     public  getAccestoAdmin():boolean{
      if(sessionStorage.getItem('session') ){
        this.jsonStringObj = sessionStorage.getItem('session'); 
        this.obj = JSON.parse(this.jsonStringObj); 
        let key:any=this.obj.roles;
        console.log(key[0])
        if(key[0]=='ROLE_ADMIN'){
          return true
        }
        
        return false;
      
    
      }else {
       
        return false;
         }  
     } 
    

}
