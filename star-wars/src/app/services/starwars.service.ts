import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IMovie } from '../models/IMovie';
import { IPeople } from '../models/IPeople';
import { IPeopleService } from '../models/IPeopleService';
import { IPlanet } from '../models/IPlanet';
import { IStarWars } from '../models/IStarWars';

@Injectable()
export class StarWarsService {
    constructor(private http: HttpClient){}

    elementApiUrl = 'https://swapi.dev/api/';
    
    getRoutes(): Observable<IStarWars>{
        return this.http.get<IStarWars>(this.elementApiUrl)
    }

    listAllPeople(): Observable<IPeopleService>{
        return this.http.get<IPeopleService>(this.elementApiUrl + 'people')
    }

    getPlanet(planetId: Number) : Observable<IPlanet>{
        return this.http.get<IPlanet>(this.elementApiUrl + 'planets/' + planetId)
    }

    getFilm(movieId: Number) : Observable<IMovie>{
        return this.http.get<IMovie>(this.elementApiUrl + 'films/' + movieId)
    }
}