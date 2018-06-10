import { mockHeroes } from './../shared/model/mock-heroes';
import * as _ from 'lodash';
import { Hero } from '../shared/model/hero';

export interface Observer {
    next(data: any);
}

export interface Observable {
    subscribe(obs: Observer);
    unsubscribe(obs: Observer);
}

interface Subject extends Observer, Observable {

}

class SubjectImplementation implements Subject {
    private observers: Observer[] = [];

    next(data: any) {
        this.observers.forEach(obs => obs.next(data));
    }
    subscribe(obs: Observer) {
        this.observers.push(obs);
    }
    unsubscribe(obs: Observer) {
        _.remove(this.observers, el => el === obs);
    }
}

const heroListSubject = new SubjectImplementation();

export let heroList$: Observable = {
    subscribe: obs => {
        heroListSubject.subscribe(obs);
        obs.next(heroes);
    },
    unsubscribe: obs => heroListSubject.unsubscribe(obs)
};

let heroes: Hero[] = [];

export function initializeHeroList(newList: Hero[]) {
    // Use cloneDeep to avoid other objects from mutating the array as a reference
    heroes = _.cloneDeep(newList);
    heroListSubject.next(heroes);
}
