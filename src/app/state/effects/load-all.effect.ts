import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';
import { NAME as LOAD_HEROES_ACTION_NAME } from '../actions/load-all.action';
import { NAME as LOAD_HEROES_SUCCESS_ACTION_NAME } from '../actions/load-all-success.action';
import { NAME as LOAD_HEROES_ERROR_ACTION_NAME } from '../actions/load-all-error.action';
import { selectFeatureHeroes } from '../../state/selectors/fetch-all.selector';

@Injectable()
export class LoadAllEffects {

    public loadHeroes$; 

    constructor(
      private actions$: Actions,
      private heroService: HeroService,
      private store: Store<any>,
    ) {
        this.loadHeroes$ = createEffect(() => this.actions$
            .pipe(
                ofType(LOAD_HEROES_ACTION_NAME),
                withLatestFrom(this.store.select(selectFeatureHeroes)),
                mergeMap(([action, payload]) => {
                    const page = action['page'] != undefined ? action['page'] : payload.page;
                    const perPage = action['perPage'] != undefined ? action['perPage'] : payload.perPage;
                    const search = action['search'] != undefined ? action['search'] : payload.search;
                    const fetchAll = this.heroService.fetchAll(page, perPage, search)
                    .pipe(
                        map((response) => ({ 
                            type: LOAD_HEROES_SUCCESS_ACTION_NAME,
                            payload: response,
                        })),
                        catchError(error => of({ 
                            type: LOAD_HEROES_ERROR_ACTION_NAME,
                            payload: error,
                        })),
                    )
                    return fetchAll;
                })
            )
        );
    }
}