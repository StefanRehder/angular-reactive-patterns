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
        console.log('Top level component initialized the hero list from mockHeros');
        store.initializeHeroList(mockHeroes.slice(0));

        // Simulate arrival of a new hero from the back-end
        setTimeout(() => {
            const newHero = {
                id: Math.random(),
                name: 'New hero arriving from the back-end'
            };

            console.log('Add hero from back-end was performed');
            store.addHero(newHero);

        }, 10000);

    }

    addHero(name: string) {
        const newHero = {
            id: Math.random(),
            name: name
        };

        console.log('Add hero was performed');
        store.addHero(newHero);
    }
}
