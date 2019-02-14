import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';

@Component({
  selector: 'app-ajouter-commentaire',
  templateUrl: './ajouter-commentaire.component.html',
  styleUrls: ['./ajouter-commentaire.component.css']
})
export class AjouterCommentaireComponent implements OnInit {

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent,
  ) { }

  mettreDansLeTableau(form: NgForm) {
    // alert(auteur);
  }

  onSubmit(value) {
    const auteur = value.auteur;
    const texte = value.texte;
    console.log('Auteur : ', auteur);
    console.log('Commentaire : ', texte);
    console.log('Id : ', this.restaurantDetailComponent.id);
    console.log('Bla : ', this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id]);
    // (this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].commentaire).push({'auteur': auteur, 'texte': texte});
  }

  ngOnInit() {
  }

}
