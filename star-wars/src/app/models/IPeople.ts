import { IMovie } from "./IMovie";

export interface IPeople{
    name: String;
    height: Number;
    mass: Number;
    hair_color: String;
    skin_color: string;
    eye_color: String;
    birth_year: String;
    gender: String;
    homeworld: String;
    films: IMovie[];
    species: [];
    vehicles: [];
    starships: [];
    created: String;
    edited: String;
    url: String;
}