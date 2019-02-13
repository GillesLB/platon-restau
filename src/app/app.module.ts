import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { PageDefautComponent } from 'src/app/shared/layout/page-defaut/page-defaut.component';
import { ListeRestaurantsComponent } from 'src/app/features/liste-restaurants/liste-restaurants.component';
import { PageNotFoundComponent } from 'src/app/features/page-not-found/page-not-found.component';
import { RestaurantDetailComponent } from './features/restaurant-detail/restaurant-detail.component';
import { BoutonComponent } from './shared/components/bouton/bouton.component';
import { AjouterRestaurantComponent } from './features/ajouter-restaurant/ajouter-restaurant.component';
import { SupprimerRestaurantComponent } from './features/supprimer-restaurant/supprimer-restaurant.component';
import { AjouterNoteComponent } from './features/ajouter-note/ajouter-note.component';
import { AjouterCommentaireComponent } from './features/ajouter-commentaire/ajouter-commentaire.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { PaginationService } from './features/pagination.service';

const routes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'liste', component: ListeRestaurantsComponent },
  { path: 'liste/:restaurantId', component: RestaurantDetailComponent },
  { path: 'ajouter-restaurant', component: AjouterRestaurantComponent },
  { path: 'supprimer-restaurant', component: SupprimerRestaurantComponent },
  { path: 'ajouter-note', component: AjouterNoteComponent },
  { path: 'ajouter-commentaire', component: AjouterCommentaireComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageDefautComponent,
    ListeRestaurantsComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
    BoutonComponent,
    AjouterRestaurantComponent,
    SupprimerRestaurantComponent,
    AjouterNoteComponent,
    AjouterCommentaireComponent,
    PaginationComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    ListeRestaurantsComponent,
    PaginationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
