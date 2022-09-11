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
  constructor(private factureService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllFacture();
  }
  public deleteFacture(code:number):void{
    this.factureService.deletefacture(code).subscribe(data=>{
      this.getAllFacture();
    }
      )
  }

  public getAllFacture(): void {
    this.factureService.getAllfactures().subscribe(data => {
      this.factures = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
