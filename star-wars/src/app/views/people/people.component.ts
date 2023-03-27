import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/IPeople';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [StarWarsService]
})
export class PeopleComponent implements OnInit {
  
  dataPeople!: IPeople;

  constructor(
    public starwarsService: StarWarsService
    ){
    this.starwarsService.listAllPeople().subscribe((route: IPeople)=>{
      
      this.dataPeople = route;
      console.log(this.dataPeople)
    })
  }

  ngOnInit() :void{}
}
