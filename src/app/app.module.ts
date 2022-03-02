import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalPollComponent } from './components/modal-poll/modal-poll.component';
import { HeroProfileComponent } from './pages/hero-profile/hero-profile.component';
import { ListadoDeHeroesComponent } from './pages/listado-de-heroes/listado-de-heroes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HeroesService } from './services/heroes.service';

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
//    StoreModule.forRoot({ })
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
