import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroes = this.route.params
    .switchMap((params: Params) => {
      this.selectedId = +params['id'];
      return this.service.getHeroes();
    });
  }
  
  isSelected(hero: Hero) { return hero.id === this.selectedId; }
  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
