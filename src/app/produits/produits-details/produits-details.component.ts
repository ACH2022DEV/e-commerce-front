import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/avis.service';
import { Avis } from 'src/app/models/avis';
import { AvisDto } from 'src/app/models/avisDto';
import { CreateAvis } from 'src/app/models/createAvis';
import { Picture } from 'src/app/models/mesImages';
import { PanierService } from 'src/app/panier/panier.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.css']
})
export class ProduitsDetailsComponent implements OnInit {
  public produit: any = { codeArticle: '' };
  public lesAvis: Avis[] = [];
  public nouveauAvis: CreateAvis[] = [];
  jsonStringObj: any = {};
  public form: FormGroup;
  obj: any = { email: '', username: '', id: '', roles: '' };
  public key: any;
  public nombreCommentaire: any;
  


  constructor(private produitService: DatabaseService, private route: ActivatedRoute, private sanitizer: DomSanitizer,
    private router: Router, private avisService: AvisService, private fb: FormBuilder) {
    this.getAllAvis();
    this.nombreCommentaire;
    //L'étoile
    this.form = this.fb.group({
      rating: ['', Validators.required],
      rating1: [1],
      rating2: [2],
      rating3: [3],
      rating4: [4],
      rating5: [5],




    })

    ///get idpersonne
    this.jsonStringObj = sessionStorage.getItem('session');

    this.obj = JSON.parse(this.jsonStringObj);
    this.key = this.obj.id;
    console.log(this.key)

  }

  ngOnInit(): void {
    this.produitService.getarticle(this.route.snapshot.params['codeArticle']).subscribe(data => {
      this.produit = data;
      this.nombreCommentaire;



    })
  }
  //Afficher les Avis de client
  public getAllAvis(): void {
    this.avisService.getAllAvis().subscribe(data => {
      this.lesAvis = data;
      this.nombreCommentaire = this.lesAvis.length;


    },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  ////////////////////////////////
  //ajouter un avis d'un client
  public ajouterVotreAvis(f: any) {
    console.log('creer avis', f)
    let data: CreateAvis = { idPersonne: 0, avis: [] };
    data.idPersonne = f.controls['idPersonne'].value;
        let avisDto: AvisDto = {} as any;
        avisDto.codeArticle = f.controls['codeArticle'].value;
        avisDto.message = f.controls['message'].value;
        avisDto.etoile = f.controls['etoile'].value
        data.avis.push(avisDto);
    this.avisService.addAvis(data).subscribe(data => {
      this.nouveauAvis = new Array<CreateAvis>();
      //console.log(data)
      this.nouveauAvis.push(data);

    })

  }


  ///



  lecodeArticle: number = this.produit.codeArticle;


  convertBase64ToImage(images: Picture[]): any {

    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
    if (images.length > 0) {
      base64 = "data:image/png;base64, " + images[0].picbyte;
    }
    return this.sanitizer.bypassSecurityTrustUrl(base64);

  }  
  convertBase64ToImages(images: Picture[]): any {
    let base64 = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
     for(let i=this.lecodeArticle;i <this.produit.length;i++){
      for(let j=this.produit.images.length;j <this.produit[i].images.id;j++){
        base64 =  "data:image/png;base64, "+ this.produit[i].images[j].picbyte;
     }} 
    return this.sanitizer.bypassSecurityTrustUrl(base64);
  } 
}
