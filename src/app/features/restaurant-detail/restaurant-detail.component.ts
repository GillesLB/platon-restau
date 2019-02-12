import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListeRestaurantsComponent } from '../liste-restaurants/liste-restaurants.component';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public id: string;

  constructor(
    public restaurantsLRC: ListeRestaurantsComponent,
    private route: ActivatedRoute
  ) {  }

  restaurant = this.restaurantsLRC.restaurants;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('restaurantId');
    console.log('ID : ', this.id);
  }

}
