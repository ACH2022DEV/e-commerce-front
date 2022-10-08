import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { Picture } from '../models/mesImages';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
public contacts:Contact[]=[];
public nombreContact:any;
  constructor(private contactService:ContactService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllContact();
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

}
