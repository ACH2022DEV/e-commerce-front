
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../composants/auth/services/security.service';

import { Personne } from '../models/personne';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
   
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
   public logout(){
  
    sessionStorage.clear();
     this.router.navigate(['/login']);
    } 
    public loggedIn(){
      return  sessionStorage.getItem('session');
    }
   

}
