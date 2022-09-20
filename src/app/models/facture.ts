import { ArticleFacture } from "./articleFactureDto";
import { Personne } from "./personne";

export interface Facture{
     id:number;
     dateEdition:Date;
     montantTotal:number;
     personne:Personne;
     articles: ArticleFacture[];
}