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
 public pageNo:number=0;
 
 public total: Array<number> | undefined;


  constructor(private pesonneService: DatabaseService) { }

  ngOnInit(): void {
    
    this.getAllPersonne();
    

  }

  public deletePersonne(id:number):void{
    this.pesonneService.deletePersonne(id).subscribe(data=>{
      this.getAllPersonne();
    }
      )
  }

  public getAllPersonne(): void {
    this.pesonneService.getAllPersonne(this.pageNo).subscribe((response) => {
      this.personnes =response;
      this.total =new Array(response['length']);//il faut utiliser le totalPages
      console.log(response.findIndex)
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  setPage(i: number,event:any){
    this.pageNo = i;
    this.getAllPersonne();
}

}
