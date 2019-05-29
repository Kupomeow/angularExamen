import { Component, OnInit } from '@angular/core';
import { Race } from '../models/race.model';
import { RaceService } from '../services/race.service';
import { DinosaurService } from '../services/dinosaur.service';
import { Router } from '@angular/router';
import { Dinosaur } from '../models/dinosaur.model';
import { Park } from '../models/park.model';
import { ParkService } from '../services/park.service';

@Component({
  selector: 'app-add-dinosaur',
  templateUrl: './add-dinosaur.component.html',
  styleUrls: ['./add-dinosaur.component.css']
})
export class AddDinosaurComponent implements OnInit {

  name: string;
  race: number;
  park: number;
  working: boolean;
  races: Race[];
  parks: Park[];
  status: number;

  dino: Dinosaur;
  constructor(public raceService: RaceService, public dinosaurService: DinosaurService,
              public parkService: ParkService, public router: Router) { }

  ngOnInit() {
    this.raceService.getAll().subscribe(res => {
      this.races = res;
    });
    this.parkService.getAll().subscribe(res => {
      this.parks = res;
    });
  }

  save(): void {
    this.dinosaurService.add(this.name, this.race, this.park, this.working).subscribe(res => {
      this.dino = res;
      this.router.navigate(['home']);
    }, error =>{
      this.status = error.status;
    });
    this.status = null;
  }

}
