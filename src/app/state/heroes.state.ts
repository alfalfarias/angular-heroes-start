import { Heroe } from '../classes/heroe';

export interface AppState {
    heroes: ReadonlyArray<Heroe>;
    page: number;
    perPage: number;
    filter: Filter;
}

export interface Filter {
    name: string;
}