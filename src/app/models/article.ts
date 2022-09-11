import { AvisDto } from "./avisDto";
import { Picture } from "./mesImages";

export interface Article{
    codeArticle:number;
    description:string;
    remise:number;
    tva:number;
    quantite:number;
    prix:number;
    paysOrigine:string;
    images:Picture[];
    avis:AvisDto;
}