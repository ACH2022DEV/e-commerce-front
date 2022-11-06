import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Article } from '../models/article';
import { Details } from '../models/detail';
import { Devis } from '../models/devis';
import { Facture } from '../models/facture';
import { Picture } from '../models/mesImages';
import { Personne } from '../models/personne';
import { SearchService } from '../produits/search.service';
import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public results:Article[]=[];
  public promotions:Article[]=[];

public size=6;
public page=0;
public searchText:any='s';
public remise:any=70;
public lenght:any;
public total: Array<number> | undefined;

  constructor(private sanitizer: DomSanitizer,private searchservice:SearchService){

  }
  ngOnInit(): void {
    this.searchservice.Search(this.page,this.size, this.searchText).subscribe((data:any)=> {
      this.results = data['content'];
      this.lenght=this.results.length;
      console.log('this.results',data)
      this.total = new Array(data['totalPages']);
  })
  this.searchservice.SearchbyRemise(this.page,this.size, this.remise).subscribe((data:any)=> {
    this.promotions = data['content'];
    this.lenght=this.promotions.length;
    console.log('this.results',data)
    this.total = new Array(data['totalPages']);
})
  }
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }  
  
}
 


