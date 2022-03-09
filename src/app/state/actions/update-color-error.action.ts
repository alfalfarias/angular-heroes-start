import { createAction, props } from '@ngrx/store';

export const NAME = '[HERO] Updating color error';
export const action = createAction(
    NAME,
    props<{ 
        payload?: any,
    }>()
);