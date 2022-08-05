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
import { HttpClientModule } from '@angular/common/http';

import { CrerPersonneComponent } from './composants/personne/crer-personne/crer-personne.component';
import { EditerPersonneComponent } from './composants/personne/editer-personne/editer-personne.component';
import { ListePersonneComponent } from './composants/personne/liste-personne/liste-personne.component';
import { VisualiserPersonneComponent } from './composants/personne/visualiser-personne/visualiser-personne.component';
import { ListeArticleComponent } from './composants/article/liste-article/liste-article.component';
import { AppComponent } from './app-component/app.component';
import { VisualiserArticleComponent } from './composants/article/visualiser-article/visualiser-article.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';


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
    ProduitsComponent,
    ContactComponent,
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
