import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-facture',
  templateUrl: './visualiser-facture.component.html',
  styleUrls: ['./visualiser-facture.component.scss']
})
export class VisualiserFactureComponent implements OnInit {
  public facture: any = { code: '' };
  constructor(private pesonneService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['code']);
    
    this.pesonneService.getfacture(this.route.snapshot.params['code']).subscribe(data => {
      this.facture = data;

  })
}

}
