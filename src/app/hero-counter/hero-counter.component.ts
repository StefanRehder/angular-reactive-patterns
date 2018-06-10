import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import { Observer, store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'hero-counter',
  templateUrl: './hero-counter.component.html',
  styleUrls: ['./hero-counter.component.css']
})
export class HeroCounterComponent implements Observer {
    heroCounter = 0;

    constructor() {
        console.log('Hero counter component is registered as an observer');

        store.heroList$.subscribe(this);
    }

    next(data: Hero[]) {
        this.heroCounter = data.length;
        console.log('Counter component received data');
    }

}
