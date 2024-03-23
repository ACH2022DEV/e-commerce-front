import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDevis } from 'src/app/models/CreateDevis';

import { DevisArticle } from 'src/app/models/devisArticle';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-crer-devis',
  templateUrl: './crer-devis.component.html',
  styleUrls: ['./crer-devis.component.scss']
})
export class CrerDevisComponent implements OnInit {
  createdevis: CreateDevis[] = [];
  offer: any[] = [];

  public elements: Array<any> = [];
  public personnes:any=[];
public size:any;
public page:any;

  constructor(private devisService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPersonne();
  }
  public getAllPersonne(){
    this.devisService.getAllPersonne(this.page=0,this.size=1000).subscribe((data:any)=>{
      this.personnes =data['content'];
      console.log('idPersonne',data)
    })
  }

  public addDevis(f: any) {
    console.log('creer devis', f)
    let data: CreateDevis = { idPersonne: 0, articles: [] };
    data.idPersonne = f.controls['idPersonne'].value;

    for (var ctrl in f.controls) {
      console.log(ctrl)
      if (ctrl !== 'idPersonne') {
        let devisArticle: DevisArticle = {} as any;
        devisArticle.codeArticle = f.controls[ctrl].controls['codeArticle'].value;
        devisArticle.remise = f.controls[ctrl].controls['remise'].value;
        //devisArticle.remise = 0;
        devisArticle.quatite = f.controls[ctrl].controls['quantite'].value
        data.articles.push(devisArticle);
      }
    }

    this.devisService.adddevis(data).subscribe(
      data => {
        this.createdevis = new Array<CreateDevis>();
        this.createdevis.push(data);
        this.router.navigate(['/liste-devis']);
        // redirection
      }
    )
  }



  addArticle() {
    this.elements.push('test');
  }

}
