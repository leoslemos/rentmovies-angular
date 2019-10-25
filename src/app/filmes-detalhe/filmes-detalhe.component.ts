import { Component } from '@angular/core';
import { FilmesService } from '../filmes.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import { Filmes } from './../filmes';

@Component({
  selector: 'app-filmes-detalhe',
  templateUrl: './filmes-detalhe.component.html',
  styleUrls: ['./filmes-detalhe.component.css']
})
export class FilmesDetalheComponent {

  filme: Filmes;

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
    ) { };

  ngOnInit() {
    
    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.filmesService.getById(id))
    )
    .subscribe(filme => this.updateFilme(filme))
  }

  updateFilme(filme){
    this.filme = filme;
  }

}
