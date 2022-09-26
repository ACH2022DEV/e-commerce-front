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
    this.produitService.Updatearticle(this.produit).subscribe(
      data => {
        this.produit = data;
        this.router.navigate(['/adminliste-produit']);
        
      }
    )
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
