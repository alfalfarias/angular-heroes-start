import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HeroesState } from '../heroes.reducers';
import { Heroe as Hero } from '../../classes/heroe';
 
export interface FeatureState {
  heroes: HeroesState;
}
 
export const selectAllFeature = (state: AppState) => state.heroes;
 
export const selectFeatureHeroes = createSelector(
  selectAllFeature,
  (state: HeroesState) => state
);