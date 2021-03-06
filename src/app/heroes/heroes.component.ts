import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private hs: HeroService) { }

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  onClick(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.hs.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
