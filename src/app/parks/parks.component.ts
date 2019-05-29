import { Component, OnInit } from '@angular/core';
import { ParkService } from '../services/park.service';
import { Park } from '../models/park.model';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  parks: Park[];
  constructor(public parkService: ParkService) { }

  ngOnInit() {
    this.parkService.getAll().subscribe(res => {
      this.parks = res;
    });
  }

}
