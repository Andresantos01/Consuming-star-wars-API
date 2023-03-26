import { Component, Input, OnInit } from '@angular/core';
import { IStarWars } from 'src/app/models/IStarWars';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [StarWarsService]
})
export class CardComponent implements OnInit{
    @Input()
    category!:String;
    @Input()
    linkTo!: String;

    dataStarWars!: IStarWars;
    constructor(
      public starwarsService: StarWarsService
      ){
      this.starwarsService.getRoutes().subscribe((route: IStarWars)=>{
        
        this.dataStarWars = route;
        console.log(this.dataStarWars)
      })
    }

    ngOnInit() : void {}
}
