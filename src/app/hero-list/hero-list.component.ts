import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, HEROES_LIST_AVAILABLE, ADD_NEW_HERO } from '../event-bus-experiments/event-bus';
import { Hero } from '../shared/model/hero';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements Observer {

    heroes: Hero[] = [];

    constructor() {
        // Bad practise: showing the sequencing downside of a global event bus
        // If this code is in ngOnInit it registers itself after the data is broadcasted
        globalEventBus.registerObserver(HEROES_LIST_AVAILABLE, this);
        globalEventBus.registerObserver(ADD_NEW_HERO, {
            notify: name => {
                this.heroes.push({
                    id: Math.random(),
                    name: name
                });
            }
        });
        console.log('HeroListComponent is registered as an observer');
    }

    notify(data: Hero[]) {
        // Using slice to make a copy of data instead of storing a reference to the object
        this.heroes = data.slice(0);
        console.log('HeroListComponent received data!', data);
    }

    toggleHeroAlive(hero: Hero) {
        console.log('Toggle hero alive performed');
        hero.alive = !hero.alive;
    }
}
