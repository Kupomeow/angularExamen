import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Race } from '../models/race.model';
import { Observable } from 'rxjs';
import { Dinosaur } from '../models/dinosaur.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  API_URL = 'https://cryptic-ravine-14239.herokuapp.com/';
  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<Race[]> {
    return this.httpClient.get<Race[]>(this.API_URL + 'races');
  }

  getOne(id: number): Observable<Race> {
    return this.httpClient.get<Race>(this.API_URL + 'race/' + id);
  }
}
