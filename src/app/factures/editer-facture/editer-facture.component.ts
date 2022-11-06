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
  public facture1: Facture = { id: 0, personne: {} as any, articles: {} as any,montantTotal:0 };
  public facture: Facture[]= [];

  public elements : Array<any> = [];
  
  constructor(private factureService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.factureService.getfacture(this.route.snapshot.params['id']).subscribe(data => {
      this.facture1 = data;
    })
  }
/*   public UpdateFacture(f: any) {
    let data = f.value;
    this.factureService.Updatefacture(data).subscribe(
      data => {
        this.facture = data;
        this.router.navigate(['/liste-facture']);
      }
    )
  } */
  public UpdateFacture(f: any) {
    console.log('Update facture', f)
    let data: Facture = { id: 0, personne: {} as any, articles: {} as any,montantTotal:0 };
    data.id= f.controls['id'].value;
    for (var ctrl in f.controls) {
      console.log(ctrl)
      if (ctrl !== 'id') {
        let factureArticle: ArticleFacture = {} as any;
        factureArticle.codeArticle = f.controls[ctrl].controls['codeArticle'].value;
        factureArticle.remise = f.controls[ctrl].controls['remise'].value;
        factureArticle.quatite = f.controls[ctrl].controls['quantite'].value
        data.articles.push(factureArticle);
        
      }
    }
    this.factureService.Updatefacture(data).subscribe(
      data => {
      // this.facture= new Array<Facture>();
        this.facture.push(data);
        this.router.navigate(['/liste-facture']);
        // redirection 
      })
  }

  addArticle() {
    let newArtcile1: ArticleFacture = {} as any;
    newArtcile1.article = {} as any;
    this.facture1.articles.push(newArtcile1)
  }

}
