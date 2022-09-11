import { DevisArticle } from "./devisArticle";
import { Personne } from "./personne";

export interface CreateDevis{
    //  personne:Personne;
    idPersonne:number;
    articles:DevisArticle[];
}