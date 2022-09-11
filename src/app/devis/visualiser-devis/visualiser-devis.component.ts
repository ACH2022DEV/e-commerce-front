import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-visualiser-devis',
  templateUrl: './visualiser-devis.component.html',
  styleUrls: ['./visualiser-devis.component.scss']
})
export class VisualiserDevisComponent implements OnInit {
  public devis: any = { codedevis :'' };
   //public devis:Devis[]=[]
  constructor(private devisService: DatabaseService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['codedevis']);
    
    this.devisService.getdevis(this.route.snapshot.params['codedevis']).subscribe(data => {
      //this.devis=data;
      console.log(data)
     // this.devis = (data as any).recordset;
      this.devis = data;

  })
}
/* public getAllDevis(): void {
  this.pesonneService.getAllDevis().subscribe(data => {
    this.devis = data;
  },
    (error: HttpErrorResponse) => alert(error.message)
  );
} */


}
