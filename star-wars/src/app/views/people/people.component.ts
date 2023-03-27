import { Component, OnInit } from '@angular/core';
import { IPeopleService } from 'src/app/models/IPeopleService';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [StarWarsService]
})
export class PeopleComponent implements OnInit {
  
  dataPeople!: IPeopleService;

  constructor(
    public starwarsService: StarWarsService
    ){
    this.starwarsService.listAllPeople().subscribe((route: IPeopleService)=>{
      
      this.dataPeople = route;
      console.log(this.dataPeople)
    })
  }

  ngOnInit() :void{}
}
