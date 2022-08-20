import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../composants/auth/services/security.service';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
     jsonStringObj:any={};
     
  obj: any={email:'',username:'',id:'',roles:''};
  
  
  
  constructor() { }

  ngOnInit(): void {
  }
   public  getData():boolean{
    if(sessionStorage.getItem('session')){
      this.jsonStringObj = sessionStorage.getItem('session'); 
  
    this.obj = JSON.parse(this.jsonStringObj); 
    let key:any=this.obj.roles;
    
    return true;
    
  
    }else {
     
      return false;
      
    }  
   } 
  
  
   

   
 
  
  
 

}


