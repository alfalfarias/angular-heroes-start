import { createAction, props } from '@ngrx/store';

export const NAME = '[HERO] Loading one error';
export const action = createAction(
    NAME,
    props<{ 
        payload?: any,
    }>()
);