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
  public montantTotal=0;
  constructor(private factureService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    
    this.factureService.getfacture(this.route.snapshot.params['id']).subscribe(data => {
      
      //this.facture = (data as any).recordset;
      this.facture=data;
      this.facture.articles.map(index => {
        this.montantTotal+=index.quatite*index.article.prix
      });
      console.log('facture',data)




    /*   console.log('facture: '+ JSON.stringify(this.facture));
      this.facture= JSON.stringify(data);
 */
  })
}

}
