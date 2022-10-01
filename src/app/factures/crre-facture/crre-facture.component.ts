import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleFacture } from 'src/app/models/articleFacture';
import { CreateFacture } from 'src/app/models/createFacture';
import { Facture } from 'src/app/models/facture';
import { Personne } from 'src/app/models/personne';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crre-facture',
  templateUrl: './crre-facture.component.html',
  styleUrls: ['./crre-facture.component.scss']
})
export class CrreFactureComponent implements OnInit {
  createFacture:CreateFacture[]=[];
public elements : Array<any> = [];
public personnes:any=[];
public size:any;
public page:any;

  constructor(private factureService: DatabaseService,private router: Router) { }

  ngOnInit(): void {
    this.getAllPersonne();
  }
  /* public addFacture(f: any) {
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
  } */

  //getAllPersonne
public getAllPersonne(){
  this.factureService.getAllPersonne(this.page=0,this.size=1000).subscribe((data:any)=>{
    this.personnes =data['content'];
    console.log('idPersonne',data)
  })
}


//
  public addFactures(f: any) {
    console.log('creer facture', f.value)
    let data: CreateFacture = { idPersonne: 0, articles: [] };
    data.idPersonne = f.controls['idPersonne'].value;

    for (var ctrl in f.controls) {
      console.log(ctrl)
      if (ctrl !== 'idPersonne') {
        let factureArticle: ArticleFacture = {} as any;
        factureArticle.codeArticle = f.controls[ctrl].controls['codeArticle'].value;
        factureArticle.remise = f.controls[ctrl].controls['remise'].value;
        factureArticle.quatite = f.controls[ctrl].controls['quatite'].value
        data.articles.push(factureArticle);
      }
    }
    this.factureService.addfacture(data).subscribe(
      data => {
        this.createFacture= new Array<CreateFacture>();
        this.createFacture.push(data);
        this.router.navigate(['/liste-facture']);
        // redirection 
      })
  }


  addArticle(){
    this.elements.push('test');
  }

}
