import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { Details } from '../models/detail';
import { Devis } from '../models/devis';
import { Facture } from '../models/facture';
import { Personne } from '../models/personne';
import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
   
  }

  
}
 


