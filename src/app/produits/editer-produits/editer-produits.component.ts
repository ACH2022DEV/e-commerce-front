import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-produits',
  templateUrl: './editer-produits.component.html',
  styleUrls: ['./editer-produits.component.css']
})
export class EditerProduitsComponent implements OnInit {
  public produit: any = { code_article: '' };
  constructor(private pesonneService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pesonneService.getarticle(this.route.snapshot.params['code_article']).subscribe(data => {
      this.produit = data;
    })
  }
  public UpdateProduit(f: any) {
    let data = f.value;
    this.pesonneService.Updatearticle(data).subscribe(
      data => {
        this.produit = data;
        this.router.navigate(['/liste-produits']);
      }
    )
  }

}
