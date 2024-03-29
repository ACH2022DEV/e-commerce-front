import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Facture } from 'src/app/models/facture';
import { Picture } from 'src/app/models/mesImages';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnDestroy, OnInit {

  public factures: Facture[] = [];
  public facture:Facture={}as any;
  //
  public total: Array<number> | undefined;
 public page:number=0;
 public size:number=8;
 public searchText:string='';
 //public tablesizes:any=[5,10,15,20];
 //public count:number=10;
 //pop up
 public popoverTitle :string= 'Confirmation';
 public popoverMessage :string= 'Are you sure?';
 confirmClicked = false;
 cancelClicked = false;
 //

  constructor(private factureService: DatabaseService, private sanitizer: DomSanitizer) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.getAllFacture();

  }
  public deleteFacture(code:number):void{
    //confirm("Press a button!");
    this.factureService.deletefacture(code).subscribe(data=>{
      this.getAllFacture();

    }
      )
  }




  public getAllFacture(): void {
    this.factureService.getAllfactures(this.page,this.size).subscribe((data:any) => {
      this.factures = data['content'];
      this.total =new Array(data['totalPages']);
      console.log(data);
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  setPage(i: number,event:any){
    this.page = i;
    this.getAllFacture();
}
//pagination
/* public onchangePage(event:any){
  this.tablesize=event.target.value;
  this.page=1;
  this.getAllFacture();
} */

//


/* public searchTerm(f:any){

} */

convertBase64ToImage(images: Picture[]): any {

  let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  if (images.length > 0) {
    base64 = "data:image/png;base64, " + images[0].picbyte;
  }
  return this.sanitizer.bypassSecurityTrustUrl(base64);

}

}
