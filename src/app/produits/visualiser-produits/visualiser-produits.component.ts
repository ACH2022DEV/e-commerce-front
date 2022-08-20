import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-produits',
  templateUrl: './visualiser-produits.component.html',
  styleUrls: ['./visualiser-produits.component.scss']
})
export class VisualiserProduitsComponent implements OnInit {
  public produit: any = { codeArticle: '' };
  constructor(private pesonneService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['codeArticle']);
    
    this.pesonneService.getarticle(this.route.snapshot.params['codeArticle']).subscribe(data => {
      this.produit = data;
  })
}

}
