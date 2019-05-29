import { Component, OnInit, Input } from '@angular/core';
import { Park } from '../models/park.model';
import { DinosaurService } from '../services/dinosaur.service';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  @Input() park: Park;
  constructor(public dinosaurService: DinosaurService) { }

  ngOnInit() {

  }

}
