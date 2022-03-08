import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoDeHeroesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ListadoDeHeroesModule { }
