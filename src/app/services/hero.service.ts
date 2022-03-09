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
		const nameStartsWith: string = search ? ('&search=' + search) : '';
    	const url: string = `${env.api.url}/marvel/heroes?page=${page}&perPage=${perPage}${nameStartsWith}`;
		const response = this.http.get<Hero[]>(url)
		.pipe(
			map((response: any) => {
				const items: Hero[] = response.items.map(item => {
					const id: string = item.id;
					const name: string = item.name;
					const description: string = item.description;
					const modified: Date = item.modified;
					const thumbnailURI: string = item.thumbnailURI;
					const team: string = item.team;
					const color: string = item.color;
					return new Hero(id, name, description, modified, thumbnailURI, team, color);
				});

				const data: HeroesState = {
					page: response.page,
					perPage: response.perPage,
					totalPages: response.totalPages,
					search: search,
					items: items,
				}; 
				return data;
			})
		);
		return response;
	}
	
	fetchOne(id: string): Observable<Hero> {
    	const url: string = `${env.api.url}/marvel/heroes/${id}`;
		const response = this.http.get<Hero>(url);
		const data = response
		.pipe(
			map((response: any) => {
				const item = response;

				const id: string = item.id;
				const name: string = item.name;
				const description: string = item.description;
				const modified: Date = item.modified;
				const thumbnailURI: string = item.thumbnailURI;
				const team: string = item.team;
				const color: string = item.color;

				const data: Hero = new Hero(id, name, description, modified, thumbnailURI, team, color);
				return data;
			})
		);
		return data;
	}
	
	updateColor(id: string, team: string, color: string): Observable<Hero> {
    	const url: string = `${env.api.url}/hero/heroes/${id}/color`;
		const response = this.http.post<Hero>(url, {
			team: team,
			color: color,
		});
		const data = response
		.pipe(
			map((response: any) => {
				const item = response;

				const id: string = item.id;
				const team: string = item.team;
				const color: string = item.color;

				const data: Hero = new Hero(id, null, null, null, null, team, color);
				return data;
			})
		);
		return data;
	}
}