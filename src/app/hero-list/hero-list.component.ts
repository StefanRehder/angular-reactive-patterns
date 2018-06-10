import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import * as _ from 'lodash';
import { Observer, heroList$ } from '../event-bus-experiments/app-data';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements Observer {

    heroes: Hero[] = [];

    constructor() {
        console.log('HeroListComponent is registered as an observer');

        heroList$.subscribe(this);
    }

    next(data: Hero[]) {
        // Using slice to make a copy of data instead of storing a reference to the object
        this.heroes = data.slice(0);
        console.log('HeroListComponent received data!', data);
    }

    toggleHeroAlive(hero: Hero) {
        console.log('Toggle hero alive performed');
        hero.alive = !hero.alive;
    }

    delete(deleted: Hero) {
        this.heroes = _.remove(this.heroes,
            hero => hero.id === deleted.id);
    }
}
