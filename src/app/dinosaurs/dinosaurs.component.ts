import { Component, OnInit } from '@angular/core';
import { Dinosaur } from '../models/dinosaur.model';
import { DinosaurService } from '../services/dinosaur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {

  dinosaurs: Dinosaur[];
  constructor(public dinosaurService: DinosaurService, public router: Router) { }

  ngOnInit() {
    this.dinosaurService.getAll().subscribe(res => {
      this.dinosaurs = res;
      console.log(this.dinosaurs);
    });
  }
}
