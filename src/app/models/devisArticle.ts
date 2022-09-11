import { Article } from "./article";
import { Devis } from "./devis";


export interface DevisArticle{
  //codeArticle:number;

   id:number;
    devis:Devis;
    article:Article;
   quatite:number;
     remise:number;
}