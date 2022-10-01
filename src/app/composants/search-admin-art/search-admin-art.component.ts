import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { SearchService } from 'src/app/produits/search.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-search-admin-art',
  templateUrl: './search-admin-art.component.html',
  styleUrls: ['./search-admin-art.component.css']
})
export class SearchAdminArtComponent implements OnInit {
  public searchText:any='';
  public results:Article[]=[];
  public size=8;
  public page=0;
  public total: Array<number> | undefined;
   //pop up 
 public popoverTitle :string= 'Confirmation';
 public popoverMessage :string= 'Are you sure?';
 confirmClicked = false;
 cancelClicked = false;
 //

  constructor(private route: ActivatedRoute, private router: Router,private searchservice:SearchService,private produitService: DatabaseService) { }

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
    public deletePRODUIT(id:number):void{
      this.produitService.deletearticle(id).subscribe(data=>{
        this.searchservice.Search(this.page,this.size, this.searchText).subscribe((data:any)=> {
          this.results = data['content'];
      
      }) })
       
    }

    setPage(i: number,event:any){
      this.page = i;
      this.searchservice.Search(this.page,this.size, this.searchText).subscribe((data:any)=> {
        this.results = data['content'];
      
  })
  }}