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
        console.log('HeroListComponent is subscribed as an observer');
        store.heroList$.subscribe(this);
    }

    next(data: Hero[]) {
        console.log('HeroListComponent received data!');
        this.heroes = data;
    }

    toggleHeroAlive(hero: Hero) {
        console.log('Toggle hero checkbox performed');
        store.toggleHeroAlive(hero);
    }

    delete(deleted: Hero) {
        console.log('Delete hero was performed');
        store.deleteHero(deleted);
    }
}
