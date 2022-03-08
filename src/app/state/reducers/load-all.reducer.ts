import { createReducer, on } from '@ngrx/store';
import { Heroe as Hero } from '../../classes/heroe';
import { loadHeroesAction, loadHeroesSuccessAction, loadHeroesErrorAction } from '../heroes.actions';

export interface HeroesState {
    page: number;
    perPage: number;
    totalPages: number;
    search: string;
    items: Hero[];
};

export const initialState: HeroesState = {
    page: 0,
    perPage: 20,
    totalPages: null,
    search: null,
    items: [],
};

export const reducer = createReducer(
    initialState,
    on(loadHeroesAction, (state: HeroesState, {page, perPage, search}) => {
        return { 
            ...state,
            page: page ? page : state.page,
            perPage: perPage ? perPage : state.perPage,
            search: search ? search : state.search,
        };
    }),
    on(loadHeroesSuccessAction, (state: HeroesState, {payload}) => {
        return { ...state, ...payload };
    }),
    on(loadHeroesErrorAction, (state: HeroesState) => {
        return { ...state };
    })
);