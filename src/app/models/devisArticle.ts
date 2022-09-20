import { Article } from "./article";
import { Devis } from "./devis";


export interface DevisArticle {
  id: number;
  devis: Devis;
  article: Article;
  quatite: number;
  remise: number;
}