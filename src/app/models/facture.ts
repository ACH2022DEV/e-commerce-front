import { ArticleFacture } from "./articleFacture";
import { Personne } from "./personne";

export interface Facture{
     code:number;
    // montantTotal:number;
     personne:Personne;
     articles: ArticleFacture[] ;
}