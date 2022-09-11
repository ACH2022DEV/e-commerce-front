import { ArticleFacture } from "./articleFacture";
import { Personne } from "./personne";

export interface CreateFacture{
     idPersonne:number;
     
       //personne:Personne;//nouveau attribute
     articles :ArticleFacture[] ;
}