import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Devis } from 'src/app/models/devis';
import { DevisArticle } from 'src/app/models/devisArticle';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-devis',
  templateUrl: './editer-devis.component.html',
  styleUrls: ['./editer-devis.component.scss']
})
export class EditerDevisComponent implements OnInit {
  public devis: Devis = { codedevis: 0, personne: {} as any, articles: {} as any };
  public elements: Array<any> = [];
  constructor(private devisService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.devisService.getdevis(this.route.snapshot.params['codedevis']).subscribe(data => {
      this.devis = data;
      console.log('DEVIDS: ', data)
    })
  }
  public UpdateDevis(f: any) {
    this.devisService.Updatedevis(this.devis).subscribe(
      data => {
        this.devis = data;
        this.router.navigate(['/liste-devis']);
      }
    )
  }
  addArticle() {
    let newArtcile: DevisArticle = {} as any;
    newArtcile.article = {} as any;
    this.devis.articles.push(newArtcile)
  }


}
