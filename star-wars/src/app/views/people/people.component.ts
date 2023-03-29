import { Component, OnInit,ViewChild } from '@angular/core';
import { IServiceApi } from 'src/app/models/IPeopleService';
import { StarWarsService } from 'src/app/services/starwars.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { IPeople } from 'src/app/models/IPeople';
import { IPlanet } from 'src/app/models/IPlanet';
import { IMovie } from 'src/app/models/IMovie';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [StarWarsService]
})



export class PeopleComponent implements OnInit {

  dataPeople!: IServiceApi;
  dataSource!: IPeople[];
  planetId!: any;
  movies!: any;
  movieId!: any;
  dataSourceMovies!: any;
  constructor(
    public starwarsService: StarWarsService
    ){
      this.starwarsService.listAllPeople().subscribe((data: IServiceApi)=>{
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
