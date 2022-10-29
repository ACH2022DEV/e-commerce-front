import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateDevis } from 'src/app/models/CreateDevis';

import { Devis } from 'src/app/models/devis';
import { Picture } from 'src/app/models/mesImages';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-liste-deis',
  templateUrl: './liste-deis.component.html',
  styleUrls: ['./liste-deis.component.scss']
})
export class ListeDeisComponent implements OnInit {
  public devis: Devis[]=[];
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

  constructor(private devisService: DatabaseService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllDevis();
  }
  public deleteDevis(id:number):void{
    this.devisService. deletedevis(id).subscribe(data=>{
      this.getAllDevis();
    }
      )
  }

  public getAllDevis(): void {
    this.devisService.getAllDevis(this.page,this.size).subscribe((data:any) => {
      this.devis = data['content'];
      this.total =new Array(data['totalPages']);
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  setPage(i: number,event:any){
    this.page = i;
    this.getAllDevis();
}
convertBase64ToImage(images: Picture[]): any {

  let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  if (images.length > 0) {
    base64 = "data:image/png;base64, " + images[0].picbyte;
  }
  return this.sanitizer.bypassSecurityTrustUrl(base64);

}  


}
