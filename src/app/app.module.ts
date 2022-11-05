import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
//import { NgForm } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
// pour l'etoile
import { ReactiveFormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { AppRoutingModule } from './app-routing.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { PanierComponent } from './panier/panier.component';
import { ProduitsDetailsComponent } from './produits/produits-details/produits-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchResultsComponent } from './produits/search-results/search-results.component';
import { SearchPersonneComponent } from './composants/personne/search-personne/search-personne.component';
import { SearchAdminArtComponent } from './composants/search-admin-art/search-admin-art.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SearchAvisComponent } from './produits/search-avis/search-avis.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';





export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    PanierComponent,
    ProduitsDetailsComponent,
    SidebarComponent,
    SearchResultsComponent,
    SearchPersonneComponent,
    SearchAdminArtComponent,
    SearchAvisComponent,
    EntrepriseComponent,
    NotificationsComponent,
    NextDirective,
    PrevDirective,
    ListeCommandesComponent,
    
    
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
    NgxPaginationModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule,
    Ng2SearchPipeModule,
    TooltipModule,
    
    
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
    
    
   /* RouterModule.forRoot([
      {path:'',component:''}])*/
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
