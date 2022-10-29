import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Article } from '../models/article';
import { Picture } from '../models/mesImages';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.scss']
})
export class ListeproduitComponent implements OnInit {
  public produits:Article[]= [];
  public total: Array<number> | undefined;
  public page:number=0;
  public size:number=8;
  public searchText:string='';
  //pop up 
 public popoverTitle :string= 'Confirmation';
 public popoverMessage :string= 'Are you sure?';
 confirmClicked = false;
 cancelClicked = false;
 //
  constructor(private produitService: DatabaseService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllProduits();
  }
  public getAllProduits(): void {
    this.produitService.getAllArticles(this.page,this.size).subscribe((data:any) => {
      this.produits = data['content'];
      this.total =new Array(data['totalPages']);
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  public deletePRODUIT(id:number):void{
    this.produitService.deletearticle(id).subscribe(data=>{
      this.getAllProduits();
    }
      )
  }
  setPage(i: number,event:any){
    this.page = i;
    this.getAllProduits();
}
convertBase64ToImage(images: Picture[]): any {

  let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  if (images.length > 0) {
    base64 = "data:image/png;base64, " + images[0].picbyte;
  }
  return this.sanitizer.bypassSecurityTrustUrl(base64);

}  
}
