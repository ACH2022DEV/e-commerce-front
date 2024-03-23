import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { SecurityService } from 'src/app/composants/auth/services/security.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  offerForm: FormGroup;
//TEST FOR NUMBER
  valeurNumerique!: number;
  date: any;

  validerSaisie(event: any) {
    // Empêcher la saisie de caractères autres que les chiffres
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // Caractère non autorisé, empêcher l'événement
      event.preventDefault();
    }


  }
  limiterLongueur() {
    if (this.valeurNumerique && this.valeurNumerique.toString().length > 4) {
      this.valeurNumerique = parseInt(this.valeurNumerique.toString().substring(0, 4), 10);
    }
  }

//END OF TEST





  powers = [
    {value:'ROLE_USER'},
    {value:'ROLE_ADMIN'},
  {value:'ROLE_EMPLOYE'}
];
  register: any = [];
  constructor(private fb: FormBuilder,private security: SecurityService ,private router:Router) {
    this.offerForm = this.fb.group({
      datedebut: ['', Validators.required],
      datefin: ['', Validators.required]
    });

  }

  relation:any={
    datedebut:'',
    datefin:''
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


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
