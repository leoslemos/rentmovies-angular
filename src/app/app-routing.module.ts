import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FilmesListaComponent } from './filmes-lista/filmes-lista.component';
import { FilmesDetalheComponent } from './filmes-detalhe/filmes-detalhe.component';

const routes: Routes = [
  {path: '', component: FilmesListaComponent},
  {path: ':id', component: FilmesDetalheComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
