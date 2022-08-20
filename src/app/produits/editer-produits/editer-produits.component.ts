import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-produits',
  templateUrl: './editer-produits.component.html',
  styleUrls: ['./editer-produits.component.scss']
})
export class EditerProduitsComponent implements OnInit {
  public produit: any = { codeArticle: '' };
 
  constructor(private pesonneService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pesonneService.getarticle(this.route.snapshot.params['codeArticle']).subscribe(data => {
      this.produit = data;
      
    })
  }
  public UpdateProduit(f: any) {
    let data = f.value;
    this.pesonneService.Updatearticle(data).subscribe(
      data => {
        this.produit = data;
        this.router.navigate(['/adminliste-produit']);
        
      }
    )
  }

}
