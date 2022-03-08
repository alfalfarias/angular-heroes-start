import { createReducer, on } from '@ngrx/store';
import { Heroe as Hero } from '../../classes/heroe';
import { loadHeroAction, loadHeroSuccessAction, loadHeroErrorAction } from '../heroes.actions';

export interface HeroState {
    item: Hero;
};

export const initialState: HeroState = {
    item: null,
};

export const reducer = createReducer(
    initialState,
    on(loadHeroAction, (state: HeroState, {id}) => {
        return { ...state };
    }),
    on(loadHeroSuccessAction, (state: HeroState, {payload}) => {
        return { item: payload };
    }),
    on(loadHeroErrorAction, (state: HeroState) => {
        return { ...state };
    })
);