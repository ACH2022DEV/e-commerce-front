import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devis } from 'src/app/models/devis';

import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-devis',
  templateUrl: './visualiser-devis.component.html',
  styleUrls: ['./visualiser-devis.component.scss']
})
export class VisualiserDevisComponent implements OnInit {
  public devis: Devis = { codedevis :0, personne: {} as any, articles: {} as any };
  public montantSRemise=0;
  public montantARemise=0;
  public remise=0;
  public montant:any;
  public montanttva:any;
  public Tva:any;
  public TTC:number=0;
  public timbre:any=0.600;
  public TTCFinal:any=0;
  public MontantNet:any;


   //public devis:Devis[]=[]
  constructor(private devisService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['codedevis']);
    
    this.devisService.getdevis(this.route.snapshot.params['codedevis']).subscribe(data => {
      console.log(data)
      this.devis = data;
      this.devis.articles.map(index => {
        this.montantSRemise+=index.quatite*index.article.prix;
        
      });
      this.devis.articles.map(index => {
        this.montantARemise+= index.quatite*(index.article.prix-(index.article.prix*index.remise/100));
        this.MontantNet=this.montantARemise.toFixed(2)
      });
      this.devis.articles.map(index => {
        this.remise+= index.quatite*(index.article.prix*index.remise/100);
       this.montant=this.remise.toFixed(2);
       this.montanttva=this.montantARemise*19/100;
       this.Tva=this.montanttva.toFixed(2);
       //this.TTC=this.Tva+this.montantARemise;
       this.TTC= Number.parseFloat(this.Tva.toString()) + Number.parseFloat(this.montantARemise.toString())+Number.parseFloat(this.timbre);
          this.TTCFinal=this.TTC.toFixed(2);


      });

  })
}
/* public getAllDevis(): void {
  this.pesonneService.getAllDevis().subscribe(data => {
    this.devis = data;
  },
    (error: HttpErrorResponse) => alert(error.message)
  );
} */


}
