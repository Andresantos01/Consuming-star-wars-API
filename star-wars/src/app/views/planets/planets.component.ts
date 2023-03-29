import { Component, OnInit } from '@angular/core';
import { IServiceApi } from 'src/app/models/IPeopleService';
import { IPlanet } from 'src/app/models/IPlanet';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  providers: [StarWarsService]
})
export class PlanetsComponent implements OnInit  {
  dataSourcePlanet!: IPlanet[];

  constructor(
    public starwarsService: StarWarsService
  ){
    this.starwarsService.getPlanets().subscribe((data : IServiceApi) => {
      this.dataSourcePlanet = data.results;
      console.log(data);
    })
  }
  ngOnInit() {}
}
