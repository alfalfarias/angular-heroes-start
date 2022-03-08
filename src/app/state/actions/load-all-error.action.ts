import { createAction, props } from '@ngrx/store';

export const NAME = '[HEROES] Loading list error';
export const action = createAction(
    NAME,
    props<{ 
        payload?: any,
    }>()
);