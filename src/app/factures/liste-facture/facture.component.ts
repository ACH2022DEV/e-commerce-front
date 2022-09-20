import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  public factures: Facture[] = [];
  public facture:Facture={}as any;
  //
  public total: Array<number> | undefined;
 public page:number=0;
 public size:number=5;
/*  public tablesize:number=10;
 public tablesizes:any=[5,10,15,20];
 public count:number=10; */
 //pop up 
 public popoverTitle :string= 'Confirmation';
 public popoverMessage :string= 'Are you sure?';
 confirmClicked = false;
 cancelClicked = false;
 //

  constructor(private factureService: DatabaseService) { }

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
      console.log(data)
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
}
