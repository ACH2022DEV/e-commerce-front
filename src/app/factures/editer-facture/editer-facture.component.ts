import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/models/facture';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-facture',
  templateUrl: './editer-facture.component.html',
  styleUrls: ['./editer-facture.component.scss']
})
export class EditerFactureComponent implements OnInit {
  public facture: any = { code: '' };
  public elements : Array<any> = [];
  
  constructor(private factureService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.factureService.getfacture(this.route.snapshot.params['code']).subscribe(data => {
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
  addArticle(){
    this.elements.push('test');
  }

}
