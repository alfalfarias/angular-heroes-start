import { createAction, props } from '@ngrx/store';

export const NAME = '[HEROES] Loading list';
export const action = createAction(
    NAME,
    props<{ 
        page?: number,
        perPage?: number,
        search?: string,
    }>()
);