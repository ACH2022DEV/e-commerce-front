import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composants/auth/login/login.component';
import { RegisterComponent } from './composants/auth/register/register.component';
import { GuardService } from './composants/auth/services/guard.service';
import { CrerPersonneComponent } from './composants/personne/crer-personne/crer-personne.component';
import { EditerPersonneComponent } from './composants/personne/editer-personne/editer-personne.component';
import { ListePersonneComponent } from './composants/personne/liste-personne/liste-personne.component';
import { VisualiserPersonneComponent } from './composants/personne/visualiser-personne/visualiser-personne.component';
import { ContactComponent } from './contact/contact.component';
import { CrerDevisComponent } from './devis/crer-devis/crer-devis.component';
import { EditerDevisComponent } from './devis/editer-devis/editer-devis.component';
import { ListeDeisComponent } from './devis/liste-devis/liste-deis.component';
import { VisualiserDevisComponent } from './devis/visualiser-devis/visualiser-devis.component';
import { CrreFactureComponent } from './factures/crre-facture/crre-facture.component';
import { EditerFactureComponent } from './factures/editer-facture/editer-facture.component';
import { FactureComponent } from './factures/liste-facture/facture.component';
import { VisualiserFactureComponent } from './factures/visualiser-facture/visualiser-facture.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageEmployeComponent } from './page-employe/page-employe.component';
import { PanierComponent } from './panier/panier.component';
import { CrerProduitsComponent } from './produits/crer-produits/crer-produits.component';
import { EditerProduitsComponent } from './produits/editer-produits/editer-produits.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { ProduitsDetailsComponent } from './produits/produits-details/produits-details.component';
import { VisualiserProduitsComponent } from './produits/visualiser-produits/visualiser-produits.component';

//import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'list-personne', component: ListePersonneComponent, canActivate: [GuardService] },
  { path: 'visualiser-personne/:id', component: VisualiserPersonneComponent, canActivate: [GuardService] },
  { path: 'edite-personne/:id', component: EditerPersonneComponent, canActivate: [GuardService] },
  { path: 'creer-personne', component: CrerPersonneComponent, canActivate: [GuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent, canActivate: [GuardService] },
  { path: 'liste-produits', component: ListeProduitsComponent },
  { path: 'visualiser-produits/:codeArticle', component: VisualiserProduitsComponent, canActivate: [GuardService] },
  { path: 'crer-produits', component:  CrerProduitsComponent, canActivate: [GuardService] },
  { path: 'editer-produits/:codeArticle', component:  EditerProduitsComponent, canActivate: [GuardService] },
  { path: 'liste-facture', component: FactureComponent, canActivate: [GuardService] },
  { path: 'editer-facture/:code', component: EditerFactureComponent, canActivate: [GuardService] },
  { path: 'crer-facture', component: CrreFactureComponent, canActivate: [GuardService] },
  { path: 'visualiser-facture/:code', component: VisualiserFactureComponent, canActivate: [GuardService] },

  { path: 'liste-devis', component: ListeDeisComponent, canActivate: [GuardService] },
  { path: 'editer-devis/:codedevis', component: EditerDevisComponent, canActivate: [GuardService] },
  { path: 'crer-devis', component: CrerDevisComponent, canActivate: [GuardService] },
  { path: 'visualiser-devis/:codedevis', component: VisualiserDevisComponent, canActivate: [GuardService] },
  { path: 'admin', component: PageAdminComponent, canActivate: [GuardService] },
  { path: 'employe', component: PageEmployeComponent, canActivate: [GuardService] },
  { path: 'adminliste-produit', component: ListeproduitComponent, canActivate: [GuardService] },
  { path: 'Panier', component: PanierComponent, canActivate: [GuardService] },
  { path: 'details/:codeArticle', component: ProduitsDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent },

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
