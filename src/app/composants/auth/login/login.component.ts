import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { SecurityService } from 'src/app/composants/auth/services/security.service';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//for social login
import { MicrosoftLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { SocialService } from '../social.service';
import { environment } from 'src/environments/environment';
declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  GoogleLoginProvider = GoogleLoginProvider;
  user: SocialUser | any;
  isLogin: boolean | any; // false
  public a: any;
  public login: any = [];
  public loginError = false;
  offer: any[] = [];



  constructor(private devisService: DatabaseService,private security: SecurityService,
    private router: Router,private fb: FormBuilder,private http: HttpClient,private authService: SocialAuthService,
    private social: SocialService
    ) {

     }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.isLogin = (data != null);
      }
    );
    if (typeof google !== 'undefined' && google.accounts) {
    google.accounts.id.initialize({
      client_id:environment.googleLoginProvider,
      callback: (respo:any)=>{
        console.log(respo)
console.log(respo.credential)
//const decodedCredential = atob(respo.credential);
this.social.loginWithGoogle(respo.credential).subscribe(
  res => {
    console.log(res["body"]);
    //encoder cette data !!!!!!!!!!!!!!!!!!!!!!!!!!
    sessionStorage.setItem('session', JSON.stringify(res["body"]));
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
  });
  }
);
      }
    });
   // google.accounts.id.prompt();
   // Générer le bouton de connexion Google
   google!.accounts.id.renderButton(
    document.getElementById('google-button'), // ID de l'élément où le bouton sera rendu
    {
      theme: 'filled_blue', // Thème du bouton (par exemple : 'outline' ou 'filled')
      size: 'large'  ,width:388,  // Taille du bouton (par exemple : 'small', 'standard' ou 'large')
    }
  );
} else {
  // Si google n'est pas encore défini, attendre et réessayer
  setTimeout(() => {
      this.ngOnInit();
  }, 100);
}
  }
  signInWithFB(): void {
     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.social.loginWithFacebook(data.authToken).subscribe(
          res => {
            console.log(res);
          }
        );
      }
    );
  }
  signInWithMicrosoft(): void {
    this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        //compléter aprés
        /* this.social.loginWithMicrosoft(data.authToken).subscribe(
          res => {

          }
        ); */
      }
    );
  }
  signOut(): void {
    this.authService.signOut();
  }

  public entrerlogin(f: any) {
    this.loginError = false;
    let data = f.value;
    this.security.login(data).subscribe({
      next: (data) => {
        this.login = data;
        console.log(data);
        let accessToken=this.login["accessToken"];
        let IdUSER=this.login["id"];
        let roles=this.login["roles"];
        const sessionkey = 'session';
        const Roleskey = 'Roles';
        const IDkey = 'ID_USER';
        const AllData = 'AllData';
// Génération d'une clé de chiffrement aléatoire
       const key = "0n3v1ew";
        const rolesJson = JSON.stringify(roles);
        const encryptedRoles =CryptoJS.AES.encrypt(rolesJson, key.trim()).toString();
        //console.log(encryptedRoles);
        sessionStorage.setItem(Roleskey, encryptedRoles);
        const encryptedsession =CryptoJS.AES.encrypt(accessToken, key.trim()).toString();
        console.log("IdUSER"+IdUSER);
        const encryptedID = CryptoJS.AES.encrypt(IdUSER.toString(), key.trim()).toString();
        sessionStorage.setItem(IDkey, encryptedID);
        const ALLdATA = JSON.stringify(this.login);
        const encryptedData = CryptoJS.AES.encrypt(ALLdATA, key.trim()).toString();
        sessionStorage.setItem(AllData, encryptedData);
        sessionStorage.setItem(sessionkey, encryptedsession);
        //get data from session storage
         // Récupérer les données chiffrées depuis le session storage
         const encryptedRolesData = sessionStorage.getItem(Roleskey);
        console.log(encryptedRolesData);
        const encryptedSession = sessionStorage.getItem(sessionkey);
        // Déchiffrer les données sensibles

        if (encryptedRolesData) {

          const rolesData = CryptoJS.AES.decrypt(encryptedRolesData, key.trim());
          const decryptedData = rolesData.toString(CryptoJS.enc.Utf8);
          console.log('decryptedData :', decryptedData);
          try {
            let decryptedDatas = JSON.parse(decryptedData);
            console.log('Roles déchiffrés :', decryptedDatas);
        } catch (error) {
            console.error("Erreur lors de l'analyse JSON des données déchiffrées :", error);
        }
      } else {
          console.log("Aucune donnée chiffrée n'a été trouvée pour les rôles.");
      }

 if (encryptedSession) {
          const sessionData = CryptoJS.AES.decrypt(encryptedSession, key.trim()).toString(CryptoJS.enc.Utf8);
          console.log('decryptedData :', sessionData);

        } else {
          console.log("Aucune donnée chiffrée n'a été trouvée pour la session.");
        }
        if (encryptedID) {
          const IDData = CryptoJS.AES.decrypt(encryptedID, key.trim()).toString(CryptoJS.enc.Utf8);
          console.log('IDData :', IDData);

        } else {
          console.log("Aucune donnée chiffrée n'a été trouvée pour l'ID.");
        }
        if (encryptedData) {
          const ALLData = CryptoJS.AES.decrypt(encryptedData, key.trim()).toString(CryptoJS.enc.Utf8);
          console.log('ALLData :', ALLData);

        } else {
          console.log("Aucune donnée chiffrée n'a été trouvée pour all data.");
        }

        //end of getting data
        sessionStorage.setItem('session', JSON.stringify(data));
        this.router.navigate(['/list-personne']);
      },
      error: () => {
        this.loginError = true;
      }
    }
    )
  }





}


