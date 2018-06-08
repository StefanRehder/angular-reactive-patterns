import { HEROES_LIST_AVAILABLE, Observer } from './../event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';
import { globalEventBus, ADD_NEW_HERO } from '../event-bus-experiments/event-bus';
import { Hero } from '../shared/model/hero';

@Component({
  selector: 'hero-counter',
  templateUrl: './hero-counter.component.html',
  styleUrls: ['./hero-counter.component.css']
})
export class HeroCounterComponent implements Observer {
    heroCounter = 0;

    constructor() {
        globalEventBus.registerObserver(HEROES_LIST_AVAILABLE, this);
        globalEventBus.registerObserver(ADD_NEW_HERO, {
            notify: name => this.heroCounter += 1
        });
        console.log('Hero counter component is registered as an observer');
    }

    notify(data: Hero[]) {
        this.heroCounter = data.length;
        console.log('Counter component received data');
    }

}
