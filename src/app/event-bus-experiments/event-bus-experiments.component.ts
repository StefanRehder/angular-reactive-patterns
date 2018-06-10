import { Component, OnInit } from '@angular/core';
import { mockHeroes } from '../shared/model/mock-heroes';
import { Hero } from '../shared/model/hero';
import { store } from './app-data';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

    ngOnInit() {
        store.initializeHeroList(mockHeroes.slice(0));
        console.log('Top level component broadcasted all heroes');

        // Simulate arrival of a new hero from the back-end
        setTimeout(() => {
            const newHero = {
                id: Math.random(),
                name: 'New hero arriving from the back-end'
            };

            store.addHero(newHero);

        }, 10000);

    }

    addHero(name: string) {
        const newHero = {
            id: Math.random(),
            name: name
        };

        store.addHero(newHero);
    }

}
