import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityService } from '../composants/auth/services/security.service';
import { Picture } from '../models/mesImages';
import { Personne } from '../models/personne';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
     jsonStringObj:any={};
     //public client:Personne[]=[];
     public client:Personne={id:0,nom:'string',prenom:'string',avis:{}as any,  adress:'string', tel:'', username:'string', email:'string', password:'', paniers:{}as any, images:{}as any};

  obj: any={email:'',username:'',id:'',roles:''};
  
  
  
  
  constructor(private personne: DatabaseService, private sanitizer: DomSanitizer) { 
    this.personne.getPersonne(this.obj.id).subscribe(data=>{
      this.client=data;
      console.log(this.client)
      
  })
  }

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
  /*  lecodeArticle: number = this.client.id;
   convertBase64ToImage(images: Picture[]): any {
    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
     for(let i=this.lecodeArticle;i <this.client.id;i++){
      for(let j=this.client.images.length;j < this.client.images.length;j++){
        base64 =  "data:image/png;base64, "+ this.client.images[j].picbyte;
     }} 
    return this.sanitizer.bypassSecurityTrustUrl(base64);
  }  */
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }
   

   
 
  
  
 

}


