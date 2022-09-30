import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmesComponent } from './components/lancamentos/filmes/filmes.component';
import { HomeComponent } from './template/home/home.component';
import { SeriesComponent } from './components/lancamentos/series/series.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'lançamentos', component:SeriesComponent},
  {path: 'lançamento/filmes', component:FilmesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
