import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HeroState } from '../heroes.reducers';
 
export interface FeatureState {
  hero: HeroState;
}
 
export const selectOneFeature = (state: AppState) => state.hero;
 
export const selectFeatureHero = createSelector(
    selectOneFeature,
    (state: HeroState) => state
);