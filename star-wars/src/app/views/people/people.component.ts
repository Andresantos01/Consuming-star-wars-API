import { Component, OnInit,ViewChild } from '@angular/core';
import { IPeopleService } from 'src/app/models/IPeopleService';
import { StarWarsService } from 'src/app/services/starwars.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { IPeople } from 'src/app/models/IPeople';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [StarWarsService]
})



export class PeopleComponent implements OnInit {

  @ViewChild(MatTable)
  table !: MatTable <any>
  headerColumnsPeople: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year','gender']

  dataPeople!: IPeopleService;
  dataSource!: IPeople[]

  constructor(
    public starwarsService: StarWarsService
    ){
    this.starwarsService.listAllPeople().subscribe((data: IPeopleService)=>{
      
      this.dataPeople = data;
      this.dataSource = data.results;
      console.log(this.dataSource);
    })
  }

  ngOnInit() :void{}
}
