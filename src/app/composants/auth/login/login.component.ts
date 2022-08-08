import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { SecurityService } from 'src/app/composants/auth/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public a:any;
  public login: any = [];
 
  constructor(private security: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }



  public entrerlogin(f: any) {
    let data = f.value;
    this.security.login(data).subscribe(
      data => {
        this.login = data;
        console.log(data);
        this.router.navigate(['/list-personne']);
        sessionStorage.setItem('session', JSON.stringify(data));
      
      }
    )
  }
  /* public connecter(){
    if(sessionStorage.getItem('session')){
      this.a=1
    }
    else this.a=2;
  }
     */
  
    
  
}
