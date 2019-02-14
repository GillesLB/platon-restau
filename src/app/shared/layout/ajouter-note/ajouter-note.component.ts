import { Component, OnInit } from '@angular/core';

import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent,
  ) { }


  mettreDansLeTableauNote() {

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
    console.log('Id : ', this.restaurantDetailComponent.id);
  }

}
