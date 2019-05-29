import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Park } from '../models/park.model';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  API_URL = 'https://cryptic-ravine-14239.herokuapp.com/';
  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<Park[]> {
    return this.httpClient.get<Park[]>(this.API_URL + 'parks');
  }

  getOne(id: number): Observable<Park> {
    return this.httpClient.get<Park>(this.API_URL + 'park/' + id);
  }
}
