import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDevis } from 'src/app/models/CreateDevis';

import { Devis } from 'src/app/models/devis';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-crer-devis',
  templateUrl: './crer-devis.component.html',
  styleUrls: ['./crer-devis.component.scss']
})
export class CrerDevisComponent implements OnInit {
  createdevis: CreateDevis[] = [];
  public elements : Array<any> = [];

  constructor(private devisService: DatabaseService,private router: Router) { }

  ngOnInit(): void {
  }
  public addDevis(f: any) {
    console.log('creer devis', f.value)
    let data = f.value;
    this.devisService.adddevis(data).subscribe(
      data => {
        this.createdevis= new Array<CreateDevis>();
        this.createdevis.push(data) ;
        this.router.navigate(['/liste-devis']);
        // redirection 
      }
    )
  }



  addArticle(){
    this.elements.push('test');
  }

}
