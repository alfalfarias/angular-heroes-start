import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Group, GROUP_COLORS } from 'src/app/classes/group-colors';
import { updateColorAction } from '../../state/heroes.actions';
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
  public hero$: Observable<HeroState>;
  public id: string;
  public question_modal: string;
  @ViewChild('modal') 
  public modal: any;

  constructor(
    private route: ActivatedRoute, 
    private store: Store<any>,
    private _location: Location
  ) { }

  ngOnInit() {
    this.hero$ = this.store.select(selectFeatureHero);

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.store.dispatch(loadHeroAction({id: this.id}));
    });
  }

  goBack(): void {
    this._location.back();
  }

  selectTeam(team): void {
    const group: Group = GROUP_COLORS.find(item => item.name === team);
    this.store.dispatch(updateColorAction({
      id: this.id,
      team: group.name,
      color: group.value,
    }));
  }
  
  launchModal(): void {
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

}
