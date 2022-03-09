import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';
import { HeroProfileComponent } from './pages/hero-profile/hero-profile.component';
import { ListadoDeHeroesComponent } from './pages/listado-de-heroes/listado-de-heroes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HeroesService } from './services/heroes.service';
import { HeroService } from './services/hero.service';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './state/app.state';
import { LoadAllEffects } from './state/effects/load-all.effect';
import { LoadOneEffects } from './state/effects/load-one.effect';
import { UpdateColorEffects } from './state/effects/update-color.effect';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
    HeroProfileComponent,
    SpinnerComponent,
    ModalPollComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production }),
    EffectsModule.forRoot([LoadAllEffects, LoadOneEffects, UpdateColorEffects])
  ],
  providers: [HeroesService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
