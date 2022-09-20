import { ArticleFacture } from "./articleFactureDto";
import { Personne } from "./personne";

export interface CreateFacture{
     idPersonne:number;
     
       //personne:Personne;//nouveau attribute
     articles :ArticleFacture[] ;
}