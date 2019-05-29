import { Component, OnInit, Input } from '@angular/core';
import { Dinosaur } from '../models/dinosaur.model';
import { DinosaurService } from '../services/dinosaur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur.component.html',
  styleUrls: ['./dinosaur.component.css']
})
export class DinosaurComponent implements OnInit {

  id: number;
  @Input() dinosaur: Dinosaur;
  constructor(public dinosaurService: DinosaurService, public router: Router) { }

  ngOnInit() {
  }

  delete(): void {
    this.dinosaurService.delete(this.id).subscribe(res => {
      this.id = res;
      console.log(this.id);
      this.router.navigate(['home']);
    });
  }

}
