import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IStarWars } from '../models/IStarWars';

@Injectable()
export class StarWarsService {
    constructor(private http: HttpClient){}

    elementApiUrl = 'https://swapi.dev/api/';
    
    getRoutes(): Observable<IStarWars>{
        return this.http.get<IStarWars>(this.elementApiUrl)
    }
}