import { Component, OnInit } from '@angular/core';
import { globalEventBus, HEROES_LIST_AVAILABLE, ADD_NEW_HERO } from './event-bus';
import { mockHeroes } from '../shared/model/mock-heroes';
import { Hero } from '../shared/model/hero';


@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

    private heroes: Hero[] = [];

    ngOnInit() {
        this.heroes = mockHeroes.slice(0);

        // Use the globalEventBus to communicate mockHeroes to all registered observers
        globalEventBus.notifyObservers(HEROES_LIST_AVAILABLE, this.heroes);
        console.log('Top level component broadcasted all heroes');

        // Simulate arrival of a new hero from the back-end
        setTimeout(() => {
            this.heroes.push({
                id: Math.random(),
                name: 'New hero arriving from the back-end'
            });

            // Notify observers of the updated list
            globalEventBus.notifyObservers(HEROES_LIST_AVAILABLE, this.heroes);
        }, 10000);

    }

    addHero(name: string) {
        globalEventBus.notifyObservers(ADD_NEW_HERO, name);
        console.log('Hero was added', name);
    }

}
