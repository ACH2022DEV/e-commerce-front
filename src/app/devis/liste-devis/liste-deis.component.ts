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
    this.devisService.getAllDevis().subscribe(data => {
      this.devis = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
