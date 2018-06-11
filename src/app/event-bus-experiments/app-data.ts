import { mockHeroes } from './../shared/model/mock-heroes';
import * as _ from 'lodash';
import { Hero } from '../shared/model/hero';
import { BehaviorSubject, Observable } from 'rxjs';

class Datastore {

    private heroes: Hero[] = [];

    private heroListSubject = new BehaviorSubject([]);

    public heroList$: Observable<Hero[]> = this.heroListSubject.asObservable();

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
