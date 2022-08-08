import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  public factures: Facture[] = [];
  constructor(private pesonneService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllFacture();
  }
  public deleteFacture(id:number):void{
    this.pesonneService.deletefacture(id).subscribe(data=>{
      this.getAllFacture();
    }
      )
  }

  public getAllFacture(): void {
    this.pesonneService.getAllfactures().subscribe(data => {
      this.factures = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
