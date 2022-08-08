import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editer-devis',
  templateUrl: './editer-devis.component.html',
  styleUrls: ['./editer-devis.component.css']
})
export class EditerDevisComponent implements OnInit {
  public devis: any = { id: '' };
  constructor(private pesonneService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pesonneService.getdevis(this.route.snapshot.params['id']).subscribe(data => {
      this.devis = data;
    })
  }
  public UpdateDevis(f: any) {
    let data = f.value;
    this.pesonneService.Updatedevis(data).subscribe(
      data => {
        this.devis = data;
        this.router.navigate(['/liste-devis']);
      }
    )
  }

}
