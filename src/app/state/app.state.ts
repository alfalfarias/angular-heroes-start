import { ActionReducerMap } from '@ngrx/store';
import { HeroesState, heroesReducer, HeroState, heroReducer } from './heroes.reducers';

export interface AppState {
  heroes: HeroesState;
  hero: HeroState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  heroes: heroesReducer,
  hero: heroReducer,
};