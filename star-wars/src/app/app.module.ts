import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import {HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { PeopleComponent } from './views/people/people.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import { PlanetsComponent } from './views/planets/planets.component';
import { FilmsComponent } from './views/films/films.component';
import { SpeciesComponent } from './views/species/species.component';
import { VehiclesComponent } from './views/vehicles/vehicles.component';
import { StarshipsComponent } from './views/starships/starships.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    PeopleComponent,
    HeaderComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
