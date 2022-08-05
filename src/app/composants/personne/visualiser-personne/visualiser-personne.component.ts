import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-personne',
  templateUrl: './visualiser-personne.component.html',
  styleUrls: ['./visualiser-personne.component.css']
})
export class VisualiserPersonneComponent implements OnInit {
  public  personnes : Personne[] = [];
  constructor(private pesonneService: DatabaseService) { }

  ngOnInit(): void {
    this.getAllPersonne();

  }
 public DeletePersonne(id:number):void{
    this.pesonneService.deletePersonne(id).subscribe(data=>{
      this.getAllPersonne();
    }
      )
  }
  public getAllPersonne(): void {
    this.pesonneService.getAllPersonne().subscribe(data => {
      this.personnes = data;
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
