import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'src/app/core/restaurant';

export const restaurants: Restaurant[] = [
  // tslint:disable-next-line:max-line-length
  {'nom': 'La cantine du coin', 'adresse': '22 rue d\'Angular 44000 NANTES', 'dateDerniereVisite': '12/02/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 0},
  // tslint:disable-next-line:max-line-length
  {'nom': 'Au joyeux serial killer', 'adresse': '14 rue Jack l\'éventreur 44100 NANTES', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2},
  // tslint:disable-next-line:max-line-length
  {'nom': 'Goldorak go !!', 'adresse': '78 rue Go Nagaï 44200 NANTES', 'dateDerniereVisite': '01/01/2019', 'note': 5, 'nombreVisite': 2, 'nombreCommentaire': 4},
];

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
