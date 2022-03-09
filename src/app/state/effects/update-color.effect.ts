import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';
import { NAME as UPDATE_COLOR_ACTION_NAME } from '../actions/update-color.action';
import { NAME as UPDATE_COLOR_SUCCESS_ACTION_NAME } from '../actions/update-color-success.action';
import { NAME as UPDATE_COLOR_ERROR_ACTION_NAME } from '../actions/update-color-error.action';

@Injectable()
export class UpdateColorEffects {

    public loadHeroes$; 

    constructor(
      private actions$: Actions,
      private heroService: HeroService
    ) {
        this.loadHeroes$ = createEffect(() => this.actions$
            .pipe(
                ofType(UPDATE_COLOR_ACTION_NAME),
                mergeMap((payload) => {
                    const id: string = payload['id'];
                    const team: string = payload['team'];
                    const color: string = payload['color'];
                    const fetchOne = this.heroService.updateColor(id, team, color)
                    .pipe(
                        map((response) => ({ 
                            type: UPDATE_COLOR_SUCCESS_ACTION_NAME,
                            id: id,
                            team: team,
                            color: color,
                        })),
                        catchError(error => of({ 
                            type: UPDATE_COLOR_ERROR_ACTION_NAME,
                            payload: error,
                        })),
                    )
                    return fetchOne;
                })
            )
        );
    }
}