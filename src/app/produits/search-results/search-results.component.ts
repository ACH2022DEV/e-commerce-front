import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { CreatePanier } from 'src/app/models/createPanier';
import { Picture } from 'src/app/models/mesImages';
import { PanierService } from 'src/app/panier/panier.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results2.component.scss']
})
export class SearchResultsComponent implements OnInit {
  
public searchText:any='';
public results:Article[]=[];
public size=12;
public page=0;
public code:any;
public ProductNotFound:boolean=false;
public lepanier: CreatePanier[] = [];
public quantity:number=1;
jsonStringObj: any = {};

obj: any = { email: '', username: '', id: '', roles: '' };
public key: any;
public total: Array<number> | undefined;

  constructor(  private sanitizer: DomSanitizer,private panierService: PanierService,private route: ActivatedRoute, private router: Router,private searchservice:SearchService) { 
    this.jsonStringObj = sessionStorage.getItem('session');

    this.obj = JSON.parse(this.jsonStringObj);
    this.key = this.obj.id;
    console.log(this.key)
  }

  ngOnInit(): void {
this.route.params.subscribe(params=>{
  if(params['searchText'])
  this.searchText=params['searchText']
  this.searchservice.Search(this.page,this.size, this.searchText).subscribe((data:any)=> {
    this.results = data['content'];
    console.log('this.results',data)
    this.total = new Array(data['totalPages']);
   



})
}) 
}

public ajouterAuPanier(f: any) {
  console.log('le nouveau panier',f.value)
  let data: CreatePanier = {}as any;
    console.log(data)
    data.idPersonne=f.value.idPersonne;
    data.paniers={}as any;
    data.paniers.codeArticle=f.value.codeArticle;
    data.paniers.quantity=f.value.quantity;
    this.code=data.paniers.codeArticle;

    this.panierService.addPanier(data).subscribe(data => {
        this.lepanier = new Array<CreatePanier>();
       
           this.lepanier.push(data);
          
        
       
      })
    }
    convertBase64ToImage(images: Picture[]): any {

      let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
      if (images.length > 0) {
        base64 = "data:image/png;base64, " + images[0].picbyte;
      }
      return this.sanitizer.bypassSecurityTrustUrl(base64);
  
    }
    setPage(i: number, event: any) {
      this.page = i;
      this.searchservice.Search(this.page,this.size, this.searchText).subscribe((data:any)=> {
        this.results = data['content'];
       
    
    })

  }



}
