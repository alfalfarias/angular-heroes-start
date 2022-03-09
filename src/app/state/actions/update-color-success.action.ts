import { createAction, props } from '@ngrx/store';

export const NAME = '[HERO] Updating color success';
export const action = createAction(
    NAME,
    props<{ 
        id: string,
        team: string,
        color: string,
    }>()
);