import { createAction, props } from '@ngrx/store';

export const NAME = '[HERO] Loading one';
export const action = createAction(
    NAME,
    props<{ 
        id: string,
    }>()
);