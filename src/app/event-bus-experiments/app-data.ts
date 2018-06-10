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

class Datastore {

    private heroes: Hero[] = [];

    private heroListSubject = new SubjectImplementation();

    public heroList$: Observable = {
        subscribe: obs => {
            this.heroListSubject.subscribe(obs);
            obs.next(this.heroes);
        },
        unsubscribe: obs => this.heroListSubject.unsubscribe(obs)
    };

    initializeHeroList(newList: Hero[]) {
        // Use cloneDeep to avoid other objects from mutating the array as a reference
        this.heroes = _.cloneDeep(newList);
        this.broadcast();
    }

    addHero(newHero: Hero) {
        // Use cloneDeep to avoid other objects from mutating the array as a reference
        this.heroes.push(_.cloneDeep(newHero));
        this.broadcast();
    }

    deleteHero(deleted: Hero) {
        _.remove(this.heroes,
            hero => hero.id === deleted.id);
            this.broadcast();
    }

    toggleHeroAlive(toggled: Hero) {
        const hero = _.find(this.heroes, item => item.id === toggled.id);
        hero.alive = !hero.alive;
        this.broadcast();
    }

    broadcast() {
        // Broadcast a clone of the data to avoid other objects from mutating the array as a reference
        this.heroListSubject.next(_.cloneDeep(this.heroes));
    }
}

export const store = new Datastore();
