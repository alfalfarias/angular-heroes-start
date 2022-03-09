import { createReducer, on } from '@ngrx/store';
import { Heroe as Hero } from '../../classes/heroe';
import { loadHeroAction, loadHeroSuccessAction, loadHeroErrorAction } from '../heroes.actions';
import { updateColorAction, updateColorSuccessAction, updateColorErrorAction } from '../heroes.actions';

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
    }),
    on(updateColorAction, (state: HeroState, {id, color, team}) => {
        return { ...state };
    }),
    on(updateColorSuccessAction, (state: HeroState, {id, color, team}) => {
        const { item } = state;
        const data = { id: id, color: color, team: team };
        return { item: {...item, ...data} };
    }),
    on(updateColorErrorAction, (state: HeroState) => {
        return { ...state };
    })
);