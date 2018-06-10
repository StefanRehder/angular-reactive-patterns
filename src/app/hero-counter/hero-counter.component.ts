import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import { Observer, store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'hero-counter',
  templateUrl: './hero-counter.component.html',
  styleUrls: ['./hero-counter.component.css']
})
export class HeroCounterComponent implements Observer, OnInit {

    heroCounter = 0;

    ngOnInit(): void {
        console.log('HeroCounterComponent is subscribed as an observer');
        store.heroList$.subscribe(this);
    }

    next(data: Hero[]) {
        console.log('HeroCounterComponent received data!');
        this.heroCounter = data.length;
    }

}
