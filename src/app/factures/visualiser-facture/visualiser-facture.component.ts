import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-facture',
  templateUrl: './visualiser-facture.component.html',
  styleUrls: ['./visualiser-facture.component.scss']
})
export class VisualiserFactureComponent implements OnInit {
  // public facture: any = { id:'' };
  public facture: Facture = { id: 0, personne: {} as any, articles: {} as any,montantTotal:0 };
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

  constructor(private factureService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    
    this.factureService.getfacture(this.route.snapshot.params['id']).subscribe(data => {
      
      //this.facture = (data as any).recordset;
      this.facture=data;
      this.facture.articles.map(index => {
        this.montantSRemise+=index.quatite*index.article.prix
      });
      this.facture.articles.map(index => {
        this.montantARemise+= index.quatite*(index.article.prix-(index.article.prix*index.remise/100));
        this.MontantNet=this.montantARemise.toFixed(2);
      });
      this.facture.articles.map(index => {
        this.remise+= index.quatite*(index.article.prix*index.remise/100);
       this.montant=this.remise.toFixed(2);
       this.montanttva=this.montantARemise*19/100;
       this.Tva=this.montanttva.toFixed(2);
       this.TTC= Number.parseFloat(this.Tva.toString()) + Number.parseFloat(this.montantARemise.toString())+Number.parseFloat(this.timbre);
       this.TTCFinal=this.TTC.toFixed(2);


      });
      console.log('facture',data)




    /*   console.log('facture: '+ JSON.stringify(this.facture));
      this.facture= JSON.stringify(data);
 */
  })
}

}
