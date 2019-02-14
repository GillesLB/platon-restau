import { Component, OnInit } from '@angular/core';

import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { RestaurantDetailComponent } from 'src/app/features/restaurant-detail/restaurant-detail.component';
import { Note } from 'src/app/core/note';

@Component({
  selector: 'app-ajouter-note',
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent implements OnInit {

  public nouvelleNote: number;

  public notes: Note[] = [
    {'avis': '😒 Beurk : ', 'note': 1},
    {'avis': '🤨 Bof : ', 'note': 2},
    {'avis': '🙂 Correct : ', 'note': 3},
    {'avis': '😋 Bien : ', 'note': 4},
    {'avis': '😍 Extra : ', 'note': 5}
  ];

  constructor(
    public listeRestaurantsComponent: ListeRestaurantsComponent,
    public restaurantDetailComponent: RestaurantDetailComponent,
  ) { }

  changementEtatBoutonRadio(event) {
    this.nouvelleNote = event.target.value;
  }

  envoyerNote() {
    this.restaurantDetailComponent.formulaireNote = 'cacher-formulaire-note';
    if ((this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note)) {
      this.nouvelleNote = Math.ceil(((this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note) + this.nouvelleNote) / 2);
    }
    console.log('Avant : ', this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note);
    this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note = this.nouvelleNote;
    console.log('Après : ', this.listeRestaurantsComponent.restaurants[this.restaurantDetailComponent.id].note);
  }

  ngOnInit() {
  }

}
