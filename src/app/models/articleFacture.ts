import { Article } from "./article";
import { Facture } from "./facture";

export interface ArticleFacture{

        id:number;

        facture:Facture;
        article:Article;
        quatite:number;
        remise:number;
}