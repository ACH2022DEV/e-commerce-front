import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrerPersonneComponent } from './composants/personne/crer-personne/crer-personne.component';
import { EditerPersonneComponent } from './composants/personne/editer-personne/editer-personne.component';
import { ListePersonneComponent } from './composants/personne/liste-personne/liste-personne.component';
import { VisualiserPersonneComponent } from './composants/personne/visualiser-personne/visualiser-personne.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
//import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: ListePersonneComponent  },
  { path: 'visualiser-personne', component: VisualiserPersonneComponent },
  { path: 'edite-personne/:id', component: EditerPersonneComponent },
  { path: 'creer-personne', component: CrerPersonneComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'produits', component: ProduitsComponent },
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
