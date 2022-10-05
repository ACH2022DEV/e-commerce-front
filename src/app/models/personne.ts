import { Avis } from "./avis";
import { Picture } from "./mesImages";
import { Panier } from "./panier";

export interface Personne {
  id: number;
  nom: String;
  prenom: String;
  adress: String;
  tel: String;
    username:String;
    email:String;
    password:String;
    //role:RoleEntity;
   paniers:Panier[];
   images:Picture[];
   avis:Avis[];
}