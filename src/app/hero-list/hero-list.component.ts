import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus-experiments/event-bus';
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
        globalEventBus.registerObserver(this);
        console.log('HeroListComponent is registered as an observer');
    }

    notify(data: Hero[]) {
        this.heroes = data;
        console.log('HeroListComponent received data!', data);
    }

}
