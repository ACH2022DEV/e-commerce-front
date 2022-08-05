import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crer-personne',
  templateUrl: './crer-personne.component.html',
  styleUrls: ['./crer-personne.component.css']
})
export class CrerPersonneComponent implements OnInit {

  personne: any = [];

  constructor(private pesonneService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  public addPersonne(f: any) {
    console.log('creer personne', f.value)
    let data = f.value;
    this.pesonneService.addPersonne(data).subscribe(
      data => {
        this.personne = new Array<Personne>();
        this.personne = data;
        this.router.navigate(['/list-personne']);
        // redirection 
      }
    )
  }


}
