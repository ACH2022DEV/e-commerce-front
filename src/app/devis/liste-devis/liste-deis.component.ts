import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateDevis } from 'src/app/models/CreateDevis';

import { Devis } from 'src/app/models/devis';
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
 public size:number=5;
 //pop up 
 public popoverTitle :string= 'Confirmation';
 public popoverMessage :string= 'Are you sure?';
 confirmClicked = false;
 cancelClicked = false;
 //

  constructor(private devisService: DatabaseService) { }

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
}
