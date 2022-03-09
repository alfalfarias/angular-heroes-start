import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { loadHeroesAction } from '../../state/heroes.actions';
import { Observable } from 'rxjs';
import { HeroesState } from '../../state/heroes.reducers';
import { selectFeatureHeroes } from '../../state/selectors/fetch-all.selector';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title: string = 'Tutorial de Angular - Héroes de Marvel';
  public page: number;
  public perPage: number;
  public total: number;
  public searchString: string;
  
  public heroes$: Observable<HeroesState>;

  // The child component : spinner
  @ViewChild('spi') spinner;

  constructor(
    private router:Router,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.dispatch(loadHeroesAction({}));
    this.heroes$ = this.store.select(selectFeatureHeroes);
    this.heroes$.subscribe((data) => {
      this.page = data.page;
      this.perPage = data.perPage;
      this.total = data.totalPages;
      this.searchString = data.search;
    });
  }

  submitSearch() {
    this.store.dispatch(loadHeroesAction({
      page: 0,
      search: this.searchString,
    }));
  }

  prevPage() {
    this.store.dispatch(loadHeroesAction({
      page: this.page-1,
    }));
  }

  nextPage() {
    this.store.dispatch(loadHeroesAction({
      page: this.page+1,
    }));
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }
}
