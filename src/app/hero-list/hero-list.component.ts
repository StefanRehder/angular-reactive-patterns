import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import * as _ from 'lodash';
import { Observer, store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements Observer, OnInit {

    // Only used to display the list
    heroes: Hero[] = [];

    ngOnInit(): void {
        store.heroList$.subscribe(this);
        console.log('HeroListComponent is subscribed to the heroList$ observable');
    }

    next(data: Hero[]) {
        this.heroes = data;
        console.log('HeroListComponent received data!', data);
    }

    toggleHeroAlive(hero: Hero) {
        console.log('Toggle hero alive performed');
        store.toggleHeroAlive(hero);
    }

    delete(deleted: Hero) {
        store.deleteHero(deleted);
    }
}
