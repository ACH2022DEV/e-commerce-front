import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { FileHandle } from 'src/app/models/file';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crer-produits',
  templateUrl: './crer-produits.component.html',
  styleUrls: ['./crer-produits.component.scss']
})
export class CrerProduitsComponent implements OnInit {
  produit: any = [];
  userfile:any;
  public imagePath:any;
  imgURL:any;

  constructor(private produitService: DatabaseService,private router: Router,private sanitiser:DomSanitizer) { }

  ngOnInit(): void {
  }
  public addProduit(f: any) {
    console.log('creer produit', f.value)
    let data = f.value;
    const productFormdata=this.prepareFormdata(data);
    
    this.produitService.addarticle(productFormdata).subscribe(
      data => {
        this.produit = new Array<Article>();
        this.produit = data;
        this.router.navigate(['/adminliste-produit']);
        // redirection 
      }
    )
  }
  prepareFormdata(article:Article):FormData{
    const formData=new FormData();
    formData.append('produit',new Blob([JSON.stringify(article)],{type:'application/json'}));
   
      formData.append('file',this.userfile );
      
    return formData;
  }
 public onSelectedFile(event:any){
    if(event.target.files){
       const file=event.target.files[0];
       this.userfile=file;
        //la nouvelle ligne:
      var reader=new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file);
      reader.onload=(event)=>{
        this.imgURL=reader.result;
      }


      
      
      const  fileHan:FileHandle={
        file:file,
        url:this.sanitiser.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)),

        
      }
      this.produit.imageDarticle=fileHan;
     
     
    }
  }
}
