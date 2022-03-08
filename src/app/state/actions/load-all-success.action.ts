import { createAction, props } from '@ngrx/store';
import { HeroesState } from '../heroes.reducers';
import { Heroe as Hero } from '../../classes/heroe';

export const NAME = '[HEROES] Loading list success';
export const action = createAction(
    NAME,
    props<{ 
        payload: any,
    }>()
);