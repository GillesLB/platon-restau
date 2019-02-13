import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'src/app/core/restaurant';
import { PageDefautComponent } from 'src/app/shared/layout/page-defaut/page-defaut.component';

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {
  nombreRestaurantTotal = 0;
  nombreRestaurantParPage = [];
  pageEnCours = 1;
  pageMax = 0;
  indexPage: number[] = [];
  finBoucle = 0;

  restaurants: Restaurant[] = [
    // tslint:disable-next-line:max-line-length
    {'nom': 'La cantine du coin', 'adresse': '22 rue d\'Angular', 'dateDerniereVisite': '12/02/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Olga', 'texte': 'Pas mal, même si ça manque de kimchi.'}, {'auteur': 'Romain', 'texte': 'Permet de faire une coupure entre 2 UST back.'}], 'restaurantId': 0},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Au joyeux serial killer', 'adresse': '14 rue Jack l\'éventreur', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Antoine', 'texte': 'Le patron me regardait avec un sourire bizarre.'}, {'auteur': 'Nicolas', 'texte': 'Ambiance colorée et sympatique.'}], 'restaurantId': 1},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Goldorak go !!', 'adresse': '78 rue Go Nagaï', 'dateDerniereVisite': '01/01/2019', 'note': 5, 'nombreVisite': 2, 'nombreCommentaire': 4, 'commentaire': [{'auteur': 'Romain', 'texte': 'La brochette grillée au Cornofulgur est top.'}, {'auteur': 'Olga', 'texte': 'Je suis trop jeune pour avoir ce type de référence 😅.'}, {'auteur': 'Nicolas', 'texte': 'Les couleurs du Rétrolazer me font penser à une licorne.'}, {'auteur': 'Gilles', 'texte': 'Cuisine typique d\'Euphore.'}], 'restaurantId': 2},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Une frite sinon rien', 'adresse': '7 rue de Belgique', 'dateDerniereVisite': '11/01/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 0, 'commentaire': [], 'restaurantId': 3},
    // tslint:disable-next-line:max-line-length
    {'nom': 'A la salade alcoolique', 'adresse': '43 rue de la vodka', 'dateDerniereVisite': '08/01/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Johan', 'texte': 'Dommage : la bière ne fait que 23°.'}, {'auteur': 'Marie', 'texte': 'Mon fils a bien aimé le whisky maison.'}], 'restaurantId': 4},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Chez Johan et Marie', 'adresse': '17 rue du Burn Down', 'dateDerniereVisite': '27/01/2019', 'note': 5, 'nombreVisite': 3, 'nombreCommentaire': 5, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'Pas mal, même si la salade d\'ano est un peu indigeste.'}, {'auteur': 'Romain', 'texte': 'C\'est original d\'écrire le menu sur des post\'it.'}, {'auteur': 'Olga', 'texte': 'Difficile de juger : je n\'y reste que 50 % du temps normal.'}, {'auteur': 'Gilles', 'texte': 'Ici, le "ice breaker" ne concerne pas que les glaçons.'}, {'auteur': 'Antoine', 'texte': 'Les portions sont généreuses, et on a souvent du mal à finir.'}], 'restaurantId': 5},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Le cri de la carotte', 'adresse': '29 rue vegan', 'dateDerniereVisite': '16/02/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Olga', 'texte': 'Parfait : il y a plein de sorte de purées différentes.'}, {'auteur': 'Gilles', 'texte': 'Il n\'y a que l\'embarras du choix 😍.'}], 'restaurantId': 6},
    // tslint:disable-next-line:max-line-length
    {'nom': 'L\'indigestion fatale', 'adresse': '33 rue du Dr Petiot', 'dateDerniereVisite': '14/01/2019', 'note': 0, 'nombreVisite': 1, 'nombreCommentaire': 1, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'N\'y allez pas, c\'est ... arrrrrrrrrrg !'}], 'restaurantId': 7},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Au coréen sex-shop', 'adresse': '69 rue du X', 'dateDerniereVisite': '31/01/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 1, 'commentaire': [{'auteur': 'Romain', 'texte': 'J\'ai trouvé un poil dans mon assiette : ça m\'inquiète.'}], 'restaurantId': 8},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Bar de la Poste', 'adresse': '1 rue de la poste', 'dateDerniereVisite': '05/02/2019', 'note': 4, 'nombreVisite': 2, 'nombreCommentaire': 4, 'commentaire': [{'auteur': 'Gilles', 'texte': 'Incontournable pour n\'importe quel facteur.'}, {'auteur': 'Nicolas', 'texte': 'Tiens, il n\'y a aucune boisson sans alcool ?'}, {'auteur': 'Johan', 'texte': 'Endroit fort sympathique.'}, {'auteur': 'Olga', 'texte': 'Un grand moment de nostalgie.'}], 'restaurantId': 9},
    // tslint:disable-next-line:max-line-length
    {'nom': 'Le poil dans la main', 'adresse': '57 rue de la grosse touffe', 'dateDerniereVisite': '26/01/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Marie', 'texte': 'J\'ai la flemme d\'écrire un commentaire.'}, {'auteur': 'Antoine', 'texte': 'L\'endroit idéal pour ne rien faire.'}], 'restaurantId': 10},
  ];

  restaurantsVisibles = [];

  constructor() { }

  pagePrecedente() {
    this.pageEnCours -= 1;
    this.restaurantsVisibles = [];
    for (let i = (this.pageEnCours * 5) - 5; i < this.pageEnCours * 5; i++) {
      this.restaurantsVisibles.push(this.restaurants[i]);
    }
  }

  pageSuivante() {
    this.pageEnCours += 1;
    this.restaurantsVisibles = [];
    if (this.pageEnCours >= this.pageMax) {
      this.finBoucle = this.nombreRestaurantTotal;
    } else {
      this.finBoucle = this.pageEnCours * 5;
    }
    for (let i = (this.pageEnCours * 5) - 5; i < this.finBoucle; i++) {
      this.restaurantsVisibles.push(this.restaurants[i]);
    }
  }

  ngOnInit() {
      this.nombreRestaurantTotal = this.restaurants.length;
      this.pageMax = Math.ceil(this.nombreRestaurantTotal / 5);
      for (let i = 0; i < 5; i++) {
        this.restaurantsVisibles.push(this.restaurants[i]);
      }
  }

}
