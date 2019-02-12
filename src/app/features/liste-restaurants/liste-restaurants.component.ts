import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'src/app/core/restaurant';

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [
    // tslint:disable-next-line:max-line-length
    {'nom': 'La cantine du coin', 'adresse': '22 rue d\'Angular', 'dateDerniereVisite': '12/02/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 2, 'restaurantId': 0},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Au joyeux serial killer', 'adresse': '14 rue Jack l\'éventreur', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'restaurantId': 1},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Goldorak go !!', 'adresse': '78 rue Go Nagaï', 'dateDerniereVisite': '01/01/2019', 'note': 5, 'nombreVisite': 2, 'nombreCommentaire': 4, 'restaurantId': 2},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Une frite sinon rien', 'adresse': '7 rue de Belgique', 'dateDerniereVisite': '11/01/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 1, 'restaurantId': 3},
    // tslint:disable-next-line:max-line-length
    {'nom': 'A la morue alcoolique', 'adresse': '43 rue de Porto', 'dateDerniereVisite': '08/01/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'restaurantId': 4},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Chez Johan et Marie', 'adresse': '17 rue du Burn Down', 'dateDerniereVisite': '27/01/2019', 'note': 5, 'nombreVisite': 3, 'nombreCommentaire': 5, 'restaurantId': 5},
  ];

  constructor() { }

  ngOnInit() {
  }

}
