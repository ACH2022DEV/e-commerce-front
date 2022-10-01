import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { SearchService } from 'src/app/produits/search.service';

@Component({
  selector: 'app-search-personne',
  templateUrl: './search-personne.component.html',
  styleUrls: ['./search-personne.component.css']
})
export class SearchPersonneComponent implements OnInit {
  public searchPersonne:string='';
  public  results: Personne[] = [];
  public size=8;
  public page=0;
  public total: Array<number> | undefined;

  constructor(private route: ActivatedRoute,private router: Router,private searchservice:SearchService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchPersonne'])
      this.searchPersonne=params['searchPersonne']
      this.searchservice.SearchPersonne(this.page,this.size,this.searchPersonne).subscribe((data:any)=> {
        this.results = data['content'];
        console.log('this.personne',data)
       this.total = new Array(data['totalPages']);
       
    
    
    
    })
    }) 
  }
  setPage(i: number, event: any) {
    this.page = i;
    this.searchservice.SearchPersonne(this.page,this.size,this.searchPersonne).subscribe((data:any)=> {
      this.results = data['content'];
     
  
  })

}

}
