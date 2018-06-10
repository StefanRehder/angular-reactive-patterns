import { mockHeroes } from './../shared/model/mock-heroes';
import * as _ from 'lodash';

export const HEROES_LIST_AVAILABLE = 'HEROES_LIST_AVAILABLE';
export const ADD_NEW_HERO = 'ADD_NEW_HERO';

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

export let heroList$: Observable;
