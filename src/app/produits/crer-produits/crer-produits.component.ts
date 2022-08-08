import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crer-produits',
  templateUrl: './crer-produits.component.html',
  styleUrls: ['./crer-produits.component.css']
})
export class CrerProduitsComponent implements OnInit {
  produit: any = [];

  constructor(private pesonneService: DatabaseService,private router: Router) { }

  ngOnInit(): void {
  }
  public addProduit(f: any) {
    console.log('creer produit', f.value)
    let data = f.value;
    this.pesonneService.addarticle(data).subscribe(
      data => {
        this.produit = new Array<Article>();
        this.produit = data;
        this.router.navigate(['/liste-produits']);
        // redirection 
      }
    )
  }
}
