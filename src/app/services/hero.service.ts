import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe as Hero } from '../classes/heroe';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroesState } from '../state/heroes.reducers';

@Injectable()
export class HeroService {	
	constructor(private http: HttpClient) { }
  
	fetchAll(page: number, perPage: number, search?: string): Observable<HeroesState> {
		const offset: number = page * perPage;
		const nameStartsWith: string = search ? ('&nameStartsWith=' + search) : '';
    	const url: string = `${env.api.url}/characters?apikey=${env.api.key}&offset=${offset}${nameStartsWith}`;
		const response = this.http.get<Hero[]>(url);
		const data = response
		.pipe(
			map((response: any) => {
				const results: Array<any> = response.data.results;

				const items: Hero[] = results.map(item => {
					const id: string = item.id;
					const name: string = item.name;
					const description: string = item.description;
					const modified: Date = item.modified;
					const thumbnail: Object = item.thumbnail;
					const resourceURI: string = item.resourceURI;
					const teamColor: string = '';
					return new Hero(id, name, description, modified, thumbnail, resourceURI, teamColor);
				});
				
				const data: HeroesState = {
					page: page,
					perPage: perPage,
					totalPages: response.data.total,
					search: search,
					items: items,
				}; 
				return data;
			})
		);
		return data;
	}
	
	fetchOne(id: string): Observable<Hero> {
    	const url: string = `${env.api.url}/characters/${id}?apikey=${env.api.key}`;
		const response = this.http.get<Hero>(url);
		const data = response
		.pipe(
			map((response: any) => {
				const results: Array<any> = response.data.results;
				const [item] = results;

				const id: string = item.id;
				const name: string = item.name;
				const description: string = item.description;
				const modified: Date = item.modified;
				const thumbnail: Object = item.thumbnail;
				const resourceURI: string = item.resourceURI;
				const teamColor: string = '';
				
				const hero: Hero = new Hero(id, name, description, modified, thumbnail, resourceURI, teamColor);
				return hero;
			})
		);
		return data;
	}
}