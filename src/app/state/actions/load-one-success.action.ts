import { createAction, props } from '@ngrx/store';
import { Heroe as Hero } from '../../classes/heroe';

export const NAME = '[HERO] Loading one success';
export const action = createAction(
    NAME,
    props<{ 
        payload: any,
    }>()
);