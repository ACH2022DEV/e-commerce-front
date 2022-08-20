import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crre-facture',
  templateUrl: './crre-facture.component.html',
  styleUrls: ['./crre-facture.component.scss']
})
export class CrreFactureComponent implements OnInit {
facture:any=[];
  constructor(private pesonneService: DatabaseService,private router: Router) { }

  ngOnInit(): void {
  }
  public addFacture(f: any) {
    console.log('creer Facture', f.value)
    let data = f.value;
    this.pesonneService.addfacture(data).subscribe(
      data => {
        this.facture= new Array<Facture>();
        this.facture = data;
        this.router.navigate(['/liste-facture']);
        // redirection 
      }
    )
  }

}
