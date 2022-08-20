import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-liste-deis',
  templateUrl: './liste-deis.component.html',
  styleUrls: ['./liste-deis.component.scss']
})
export class ListeDeisComponent implements OnInit {
  public devis: Devis[] = [];
  constructor(private pesonneService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllDevis();
  }
  public deleteDevis(id:number):void{
    this.pesonneService. deletedevis(id).subscribe(data=>{
      this.getAllDevis();
    }
      )
  }

  public getAllDevis(): void {
    this.pesonneService.getAllDevis().subscribe(data => {
      this.devis = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
