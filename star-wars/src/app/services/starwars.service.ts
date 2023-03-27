import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPeople } from '../models/IPeople';
import { IStarWars } from '../models/IStarWars';

@Injectable()
export class StarWarsService {
    constructor(private http: HttpClient){}

    elementApiUrl = 'https://swapi.dev/api/';
    
    getRoutes(): Observable<IStarWars>{
        return this.http.get<IStarWars>(this.elementApiUrl)
    }

    listAllPeople(): Observable<IPeople>{
        return this.http.get<IPeople>(this.elementApiUrl + 'people')
    }
}