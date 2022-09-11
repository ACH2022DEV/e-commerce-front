import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { SecurityService } from 'src/app/composants/auth/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  powers = [
    {value:'ROLE_USER'}, 
    {value:'ROLE_ADMIN'},
  {value:'ROLE_EMPLOYE'}
];
  register: any = [];
  constructor(private security: SecurityService ,private router:Router) { }

  ngOnInit(): void {
  }
  public onRegistre(f: any) {
    console.log('registre', f.value)
    let data = f.value;
    this.security.register(data).subscribe(
      data => {
        console.log(data)
        this.register = new Array<Register>();
        this.register = data;
        this.router.navigate(['/login']);
        // redirection 
      }
    )
  }

}
