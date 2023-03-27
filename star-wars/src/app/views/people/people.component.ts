import { Component, OnInit,ViewChild } from '@angular/core';
import { IPeopleService } from 'src/app/models/IPeopleService';
import { StarWarsService } from 'src/app/services/starwars.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { IPeople } from 'src/app/models/IPeople';
import { IPlanet } from 'src/app/models/IPlanet';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [StarWarsService]
})



export class PeopleComponent implements OnInit {

  @ViewChild(MatTable)
  table !: MatTable <any>
  headerColumnsPeople: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year','gender', 'homeworld']

  dataPeople!: IPeopleService;
  dataSource!: IPeople[]
  planetId!: any;
  
  constructor(
    public starwarsService: StarWarsService
    ){
      this.starwarsService.listAllPeople().subscribe((data: IPeopleService)=>{
        this.dataPeople = data;
        this.dataSource = data.results;


        for(let i = 0; i < this.dataSource.length; i++){

          this.planetId = this.dataSource[i].homeworld.split( "/",6)[5];

          this.starwarsService.getPlanet(this.planetId).subscribe((dataPlanet : IPlanet)=>{

            this.dataSource[i].homeworld = dataPlanet.name;
          });
        }
        
    });

   
  }

  ngOnInit() :void{}
}
