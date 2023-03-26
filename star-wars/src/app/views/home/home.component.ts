import { Component, Input, OnInit } from '@angular/core';
import { IStarWars } from 'src/app/models/IStarWars';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StarWarsService]
})



export class HomeComponent implements OnInit {


  dataStarWars!: IStarWars;
  constructor(
    public starwarsService: StarWarsService
    ){
    this.starwarsService.getRoutes().subscribe((route: IStarWars)=>{
      
      this.dataStarWars = route;
      console.log(this.dataStarWars)
    })
  }



  ngOnInit() :void {}
  
}
