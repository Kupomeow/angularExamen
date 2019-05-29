import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dinosaur } from '../models/dinosaur.model';

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {

  API_URL = 'https://cryptic-ravine-14239.herokuapp.com/';
  constructor(public httpClient: HttpClient) { }

  test(): Observable<Dinosaur> {
    return this.httpClient.get<Dinosaur>(this.API_URL + 'test');
  }

  getAll(): Observable<Dinosaur[]> {
    return this.httpClient.get<Dinosaur[]>(this.API_URL + 'dinosaurs');
  }

  getOne(id: number): Observable<Dinosaur> {
    return this.httpClient.get<Dinosaur>(this.API_URL + 'dinosaur/' + id );
  }

  add(name: string, raceId: number, parkId: number, isWorking: boolean): Observable<Dinosaur> {
    return this.httpClient.post<Dinosaur>(this.API_URL + 'dinosaur', {
      name, raceId, parkId, isWorking
    });
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'dinosaur/' + id);
  }

  getAllByParkId(id: number): Observable<Dinosaur[]> {
    return this.httpClient.get<Dinosaur[]>(this.API_URL + 'park/' + id);
  }
}
