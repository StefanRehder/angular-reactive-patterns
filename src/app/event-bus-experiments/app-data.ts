import { mockHeroes } from './../shared/model/mock-heroes';
import * as _ from 'lodash';
import { Hero } from '../shared/model/hero';
import { BehaviorSubject, Observable } from 'rxjs';

class Datastore {

    private heroListSubject = new BehaviorSubject([]);

    public heroList$: Observable<Hero[]> = this.heroListSubject.asObservable();

    initializeHeroList(newList: Hero[]) {
        this.heroListSubject.next(_.cloneDeep(newList));
    }

    addHero(newHero: Hero) {
        const heroes = this.cloneHeroes();
        heroes.push(_.cloneDeep(newHero));

        this.heroListSubject.next(heroes);
    }

    deleteHero(deleted: Hero) {
        const heroes = this.cloneHeroes();
        _.remove(heroes, hero => hero.id === deleted.id);

        this.heroListSubject.next(heroes);
    }

    toggleHeroAlive(toggled: Hero) {
        const heroes = this.cloneHeroes();

        const hero = _.find(heroes, item => item.id === toggled.id);

        hero.alive = !hero.alive;
        this.heroListSubject.next(heroes);
    }

    private cloneHeroes() {
        // Use cloneDeep to avoid other objects from mutating the array as a reference
        return _.cloneDeep(this.heroListSubject.getValue());
    }
}

export const store = new Datastore();
