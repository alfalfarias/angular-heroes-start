import { createAction, props } from '@ngrx/store';

export const NAME = 'HEORES_FETCH_ONE';
export const action = createAction(
    NAME,
    props<{id: number}>
);