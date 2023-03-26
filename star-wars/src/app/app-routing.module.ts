import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './views/films/films.component';
import { HomeComponent } from './views/home/home.component';
import { PeopleComponent } from './views/people/people.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { SpeciesComponent } from './views/species/species.component';
import { StarshipsComponent } from './views/starships/starships.component';
import { VehiclesComponent } from './views/vehicles/vehicles.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'people',component: PeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'species',component: SpeciesComponent},
  {path: 'vehicles',component: VehiclesComponent},
  {path: 'starships', component: StarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
