import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-devis',
  templateUrl: './visualiser-devis.component.html',
  styleUrls: ['./visualiser-devis.component.scss']
})
export class VisualiserDevisComponent implements OnInit {
  public dev: any = { codeDevis: '' };
  constructor(private pesonneService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['codeDevis']);
    
    this.pesonneService.getdevis(this.route.snapshot.params['codeDevis']).subscribe(data => {
      this.dev = data;

  })
}

}
