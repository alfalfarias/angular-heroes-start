import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { ModalPollComponent } from '../../components/modal-poll/modal-poll.component';
import { Store } from '@ngrx/store';
import { loadHeroAction } from '../../state/heroes.actions';
import { Observable } from 'rxjs';
import { HeroState } from '../../state/heroes.reducers';
import { selectFeatureHero } from '../../state/selectors/fetch-one.selector';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {
  @ViewChild('modal') 
  public modal: any;
  public hero$: Observable<HeroState>;
  public question_modal: string;
  public team: string = "";

  constructor(
    private route: ActivatedRoute, 
    private store: Store<any>,
    private _location: Location
  ) { }

  ngOnInit() {
    this.hero$ = this.store.select(selectFeatureHero);

    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.store.dispatch(loadHeroAction({id: id}));
    });
  }

  goBack(): void {
    this._location.back();
  }

  getTeam(team): void {
    this.team = team;
  //  this.heroesService.teams.set(this.heroe.id, this.team);
  }

  launchModal(): void {
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

}
