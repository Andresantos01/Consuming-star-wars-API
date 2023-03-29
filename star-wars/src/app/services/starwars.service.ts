import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IMovie } from '../models/IMovie';
import { IServiceApi } from '../models/IPeopleService';
import { IPlanet } from '../models/IPlanet';
import { IStarWars } from '../models/IStarWars';

@Injectable()
export class StarWarsService {
    constructor(private http: HttpClient){}

    elementApiUrl = 'https://swapi.dev/api/';
    
    getRoutes(): Observable<IStarWars>{
        return this.http.get<IStarWars>(this.elementApiUrl);
    }

    listAllPeople(): Observable<IServiceApi>{
        return this.http.get<IServiceApi>(this.elementApiUrl + 'people');
    }

    getPlanet(planetId: Number) : Observable<IPlanet>{
        return this.http.get<IPlanet>(this.elementApiUrl + 'planets/' + planetId);
    }

    getPlanets() : Observable<IServiceApi>{
        return this.http.get<IServiceApi>(this.elementApiUrl + 'planets' );
    }

    getMovies() : Observable<IPlanet[]>{
        return this.http.get<IPlanet[]>(this.elementApiUrl + 'films');
    }
}