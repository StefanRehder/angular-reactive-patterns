import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'hero-counter',
  templateUrl: './hero-counter.component.html',
  styleUrls: ['./hero-counter.component.css']
})
export class HeroCounterComponent implements Observer<Hero[]>, OnInit {

    heroCounter = 0;

    ngOnInit(): void {
        console.log('HeroCounterComponent is subscribed as an observer');
        store.heroList$.subscribe(this);
    }

    // For some reason after switching to rxjs this has to be a fat arrow function
    // Otherwise it does not update the view.
    next = (data: Hero[]) => {
        console.log('HeroCounterComponent received data!');
        this.heroCounter = data.length;
    }

    error(err: any) {
        console.error(err);
    }

    complete() {
        console.log('Completed');
    }
}
