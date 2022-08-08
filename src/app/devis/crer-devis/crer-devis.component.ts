import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devis } from 'src/app/models/devis';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-crer-devis',
  templateUrl: './crer-devis.component.html',
  styleUrls: ['./crer-devis.component.css']
})
export class CrerDevisComponent implements OnInit {
  devis: any = [];
  constructor(private pesonneService: DatabaseService,private router: Router) { }

  ngOnInit(): void {
  }
  public addDevis(f: any) {
    console.log('creer devis', f.value)
    let data = f.value;
    this.pesonneService.adddevis(data).subscribe(
      data => {
        this.devis= new Array<Devis>();
        this.devis = data;
        this.router.navigate(['/liste-devis']);
        // redirection 
      }
    )
  }

}
