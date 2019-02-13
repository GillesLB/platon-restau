import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

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
    public restaurantDetailComponent: RestaurantDetailComponent
  ) { }

  mettreDansLeTableau() {

  }

  onSubmit(form: NgForm) {
    const auteur = form.value['auteur'];
    const texte = form.value['texte'];
    (this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].commentaire).push({'auteur': auteur, 'texte': texte});
  }

  ngOnInit() {
  }

}
