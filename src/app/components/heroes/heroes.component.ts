import { Component, OnInit } from '@angular/core';

/*
 ** Models
 */
import { Hero } from '@/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  /*
   ** Data
   */
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() {}

  ngOnInit(): void {}
}
