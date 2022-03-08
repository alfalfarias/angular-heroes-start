import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';
import { NAME as LOAD_HERO_ACTION_NAME } from '../actions/load-one.action';
import { NAME as LOAD_HERO_SUCCESS_ACTION_NAME } from '../actions/load-one-success.action';
import { NAME as LOAD_HERO_ERROR_ACTION_NAME } from '../actions/load-one-error.action';

@Injectable()
export class LoadOneEffects {

    public loadHeroes$; 

    constructor(
      private actions$: Actions,
      private heroService: HeroService
    ) {
        this.loadHeroes$ = createEffect(() => this.actions$
            .pipe(
                ofType(LOAD_HERO_ACTION_NAME),
                mergeMap((payload) => {
                    const id: string = payload['id'];
                    const fetchOne = this.heroService.fetchOne(id)
                    .pipe(
                        map((response) => ({ 
                            type: LOAD_HERO_SUCCESS_ACTION_NAME,
                            payload: response,
                        })),
                        catchError(error => of({ 
                            type: LOAD_HERO_ERROR_ACTION_NAME,
                            payload: error,
                        })),
                    )
                    return fetchOne;
                })
            )
        );
    }
}