import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-personne',
  templateUrl: './visualiser-personne.component.html',
  styleUrls: ['./visualiser-personne.component.scss']
})
export class VisualiserPersonneComponent implements OnInit {
 
  public personne: any = { id: '' };
 
  constructor(private pesonneService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    // récupérer la personne avec l'id à partir de la base de données 
    // get by id 
    this.pesonneService.getPersonne(this.route.snapshot.params['id']).subscribe(data => {
      this.personne = data;

  })
}



  
}
