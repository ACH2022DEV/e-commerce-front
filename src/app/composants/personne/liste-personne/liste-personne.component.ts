import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.scss']
})
export class ListePersonneComponent implements OnInit {
  public personnes: Personne[] = [];
  //public personnes:any;
 //public pageNo:number=0;
 
 public total: Array<number> | undefined;
 public page:number=0;
 public size:number=5;
 
  public searchPersonne:string='';
public currentPage:any;
 

//public searchText2:any;

  constructor(private pesonneService: DatabaseService) {
   
   
   }

  ngOnInit(): void {
    
    this.getAllPersonne();
    

  }



  public getAllPersonne(): void {
    this.pesonneService.getAllPersonne(this.page,this.size).subscribe((response:any) => {
      this.personnes =response['content'];
      console.log(response);
       this.total =new Array(response['totalPages']);//il faut utiliser le totalPages
      //  this.totalitems =new Array(response['totalElements']);
     
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  setPage(i: number,event:any){
    this.page = i;
    //this.currentPage=i;
    

    this.getAllPersonne();
}

public Next(): void {
  }
    // some checks
public previous(): void {
  // some checks
   --this.page ;
}










}
