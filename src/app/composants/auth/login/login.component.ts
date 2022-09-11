import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { SecurityService } from 'src/app/composants/auth/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public a: any;
  public login: any = [];
  public loginError = false;


  constructor(private security: SecurityService, private router: Router) { }

  ngOnInit(): void {

  }



  public entrerlogin(f: any) {
    this.loginError = false;
    let data = f.value;
    this.security.login(data).subscribe({
      next: (data) => {
        this.login = data;
        console.log(data);
        this.router.navigate(['/list-personne']);
        sessionStorage.setItem('session', JSON.stringify(data));
      },
      error: () => {
        this.loginError = true;
      }
    }
    )
  }





}
function roles(roles: any): string {
  throw new Error('Function not implemented.');
}

