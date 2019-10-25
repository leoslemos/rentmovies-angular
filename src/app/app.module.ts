import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmesListaComponent } from './filmes-lista/filmes-lista.component';
import { FilmesDetalheComponent } from './filmes-detalhe/filmes-detalhe.component';
import { routing } from './app-routing.module';
import { FilmesService } from './filmes.service';


@NgModule({
  declarations: [
    AppComponent,
    FilmesListaComponent,
    FilmesDetalheComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
