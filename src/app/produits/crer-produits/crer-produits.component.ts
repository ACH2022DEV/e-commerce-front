import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { FileHandle } from 'src/app/models/file';
import { Picture } from 'src/app/models/mesImages';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crer-produits',
  templateUrl: './crer-produits.component.html',
  styleUrls: ['./crer-produits.component.scss']
})
export class CrerProduitsComponent implements OnInit {
  produit: any = [];
  userfile:any;
  userfile2:any;
  public imagePath:any;
  imgURL:any;
  images :string[]= [];
  public elements : Array<any> = [] ;
 
   public fileList : FileList[] | undefined
   public formData2=new FormData();
 

  constructor(private produitService: DatabaseService,private router: Router,private sanitiser:DomSanitizer) { }

  ngOnInit(): void {
  }
  addimage(){
    this.elements.push('test');
  }

  
  public addProduit(f: any) {
    console.log('this is data', f.value)
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
   // const formData=new FormData();
   this.formData2.append('article',new Blob([JSON.stringify(article)],{type:'application/json'}));
 
  // this.formData2.append('files', this.userfile);
     // formData.append('files', this.userfile2);
     
    return this.formData2;
  }
  public onSelectedFile(event:any){
    if(event.target.files && event.target.files[0]){
       var file= event.target.files.length;
       var files= event.target.files;
        for (let i = 0; i < file; i++) {
          this.userfile=files[i];
          this.formData2.append('files',this.userfile);
          console.log( 'this.formData2',this.formData2)
      var reader=new FileReader();
      reader.onload = (event:any) => {
        this.images.push(event.target.result); 
      }
      reader.readAsDataURL(event.target.files[i]);

    } }}
    removeImage(i: number) {
      this.images.splice(i, 1);
    }


  
 
  

        
      }
