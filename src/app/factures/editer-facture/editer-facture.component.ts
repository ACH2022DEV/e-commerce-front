import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleFacture } from 'src/app/models/articleFacture';
import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-facture',
  templateUrl: './editer-facture.component.html',
  styleUrls: ['./editer-facture.component.scss']
})
export class EditerFactureComponent implements OnInit {
  public facture: Facture = { id: 0, personne: {} as any, articles: {} as any,montantTotal:0 };
  public elements : Array<any> = [];
  
  constructor(private factureService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.factureService.getfacture(this.route.snapshot.params['id']).subscribe(data => {
      this.facture = data;
    })
  }
  public UpdateFacture(f: any) {
    let data = f.value;
    this.factureService.Updatefacture(data).subscribe(
      data => {
        this.facture = data;
        this.router.navigate(['/liste-facture']);
      }
    )
  }
  addArticle() {
    let newArtcile1: ArticleFacture = {} as any;
    newArtcile1.article = {} as any;
    this.facture.articles.push(newArtcile1)
  }

}
