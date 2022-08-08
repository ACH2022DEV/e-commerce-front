import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule } from '@angular/router';
//import { NgForm } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CrerPersonneComponent } from './composants/personne/crer-personne/crer-personne.component';
import { EditerPersonneComponent } from './composants/personne/editer-personne/editer-personne.component';
import { ListePersonneComponent } from './composants/personne/liste-personne/liste-personne.component';
import { VisualiserPersonneComponent } from './composants/personne/visualiser-personne/visualiser-personne.component';
import { ListeArticleComponent } from './composants/article/liste-article/liste-article.component';
import { AppComponent } from './app-component/app.component';
import { VisualiserArticleComponent } from './composants/article/visualiser-article/visualiser-article.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './composants/auth/login/login.component';
import { RegisterComponent } from './composants/auth/register/register.component';
import { SecurityInterceptorService } from './composants/auth/services/security-interceptor.service';
import { FactureComponent } from './factures/liste-facture/facture.component';
import { CrreFactureComponent } from './factures/crre-facture/crre-facture.component';
import { VisualiserFactureComponent } from './factures/visualiser-facture/visualiser-facture.component';
import { EditerFactureComponent } from './factures/editer-facture/editer-facture.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { EditerProduitsComponent } from './produits/editer-produits/editer-produits.component';
import { CrerProduitsComponent } from './produits/crer-produits/crer-produits.component';
import { VisualiserProduitsComponent } from './produits/visualiser-produits/visualiser-produits.component';
import { ListeDeisComponent } from './devis/liste-devis/liste-deis.component';
import { EditerDevisComponent } from './devis/editer-devis/editer-devis.component';
import { CrerDevisComponent } from './devis/crer-devis/crer-devis.component';
import { VisualiserDevisComponent } from './devis/visualiser-devis/visualiser-devis.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageEmployeComponent } from './page-employe/page-employe.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';


@NgModule({
  declarations: [
    AppComponent,
    //MenuComponent,
    HomeComponent,
    //NavbarComponent,
    FooterComponent,
    CrerPersonneComponent,
    EditerPersonneComponent,
    ListePersonneComponent,
    VisualiserPersonneComponent,
    VisualiserArticleComponent,
    ListeArticleComponent,
    HeaderComponent,
    NavbarComponent,
    
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    FactureComponent,
    CrreFactureComponent,
    VisualiserFactureComponent,
    EditerFactureComponent,
    
    ListeProduitsComponent,
    EditerProduitsComponent,
    CrerProduitsComponent,
    VisualiserProduitsComponent,
    ListeDeisComponent,
    EditerDevisComponent,
    CrerDevisComponent,
    VisualiserDevisComponent,
    PageAdminComponent,
    PageEmployeComponent,
    ListeproduitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatSliderModule,
    MatChipsModule,
    FormsModule,
    HttpClientModule,
    
    
   /* RouterModule.forRoot([
      {path:'',component:''}])*/
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
