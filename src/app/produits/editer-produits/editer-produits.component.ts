import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { FileHandle } from 'src/app/models/file';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-produits',
  templateUrl: './editer-produits.component.html',
  styleUrls: ['./editer-produits.component.scss']
})
export class EditerProduitsComponent implements OnInit {
  public produit: Article = { codeArticle:0, description:'',remise:0,tva:0, quantite:0,prix:0,paysOrigine:'',
    images:{}as any,avis:{}as any};
    userfile:any;
    public formData2=new FormData();

    images :string[]= [];

 public produit1:Article[]=[];
 public produit2:FormData | undefined;
  
 
 
  
 /*  userfile: any;
  imagePath: any;
  imgURL: any;
  sanitiser: any; */
 
  constructor(private produitService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.produitService.getarticle(this.route.snapshot.params['codeArticle']).subscribe(data => {
      this.produit = data;
      
    })
  }
  public UpdateProduit(f: any) {
    const productFormdata=this.prepareFormdata(this.produit);

    this.produitService.Updatearticle(productFormdata).subscribe(
      data => {
        this.produit2=data;
        this.router.navigate(['/adminliste-produit']);
        
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
      let index = this.userfile.indexOf(this.images);
      this.userfile.splice.indexOf(this.images,1)
       this.images.splice(i, 1);
       
     }
 
 
   
  //this code is for update the new image(check of it)
/*   public onSelectedFile(event:any){
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
 */
}
