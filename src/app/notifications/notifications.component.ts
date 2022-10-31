import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { Picture } from '../models/mesImages';
import { Personne } from '../models/personne';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
public contacts:Contact[]=[];
public nombreContact:any;
public personnes: Personne[] = [];
public total: Array<number> | undefined;
public page:number=0;
public size:number=100;
  constructor(private pesonneService: DatabaseService,private contactService:ContactService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllContact();
    this.getAllPersonne();
  }
  public getAllContact(): void {
    this.contactService.getAllContact().subscribe(data => {
      this.contacts = data;
      this.nombreContact= this.contacts.length;
      this.getAllContact();


      // console.log(this.monpanier.length)
    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

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
}
