import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import * as _ from 'lodash';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements Observer<Hero[]>, OnInit {

    // Only used to display the list
    heroes: Hero[] = [];

    ngOnInit(): void {
        console.log('HeroListComponent is subscribed as an observer');
        store.heroList$.subscribe(this);
    }

    // For some reason after switching to rxjs this has to be a fat arrow function
    // Otherwise it does not update the view.
    next = (data: Hero[]) => {
        console.log('HeroListComponent received data!');
        this.heroes = data;
    }

    error(err: any) {
        console.error(err);
    }

    complete() {
        console.log('Completed');
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
