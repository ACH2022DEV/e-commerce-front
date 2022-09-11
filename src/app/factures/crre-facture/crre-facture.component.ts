import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateFacture } from 'src/app/models/createFacture';
import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crre-facture',
  templateUrl: './crre-facture.component.html',
  styleUrls: ['./crre-facture.component.scss']
})
export class CrreFactureComponent implements OnInit {
public facture:Facture[]=[];
public elements : Array<any> = [];
  constructor(private factureService: DatabaseService,private router: Router) { }

  ngOnInit(): void {
  }
  public addFacture(f: any) {
    console.log('creer Facture', f.value)
    let data = f.value;
    this.factureService.addfacture(data).subscribe(
      data => {
        this.facture= new Array<Facture>();
        this.facture.push(data);
        this.router.navigate(['/liste-facture']);
        // redirection 
      }
    )
  }
  addArticle(){
    this.elements.push('test');
  }

}
