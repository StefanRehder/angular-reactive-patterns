import { Component, OnInit } from '@angular/core';
import { globalEventBus, HEROES_LIST_AVAILABLE, ADD_NEW_HERO } from './event-bus';
import { mockHeroes } from '../shared/model/mock-heroes';


@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // Use the globalEventBus to communicate mockHeroes to all registered observers
        globalEventBus.notifyObservers(HEROES_LIST_AVAILABLE, mockHeroes.slice(0));
        console.log('Top level component broadcasted all heroes');
    }

    addHero(name: string) {
        globalEventBus.notifyObservers(ADD_NEW_HERO, name);
        console.log('Hero was added', name);
    }

}
