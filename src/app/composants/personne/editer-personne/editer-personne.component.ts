import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-personne',
  templateUrl: './editer-personne.component.html',
  styleUrls: ['./editer-personne.component.css']
})
export class EditerPersonneComponent implements OnInit {

  public personne: any = { id: '' };

  constructor(private pesonneService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    // récupérer la personne avec l'id à partir de la base de données 
    // get by id 
    this.pesonneService.getPersonne(this.route.snapshot.params['id']).subscribe(data => {
      this.personne = data;
    })
  }

  public UpdatePersonne(f: any) {
    let data = f.value;
    this.pesonneService.UpdatePersonne(data).subscribe(
      data => {
        this.personne = data;
        this.router.navigate(['/list-personne']);
      }
    )
  }





}
