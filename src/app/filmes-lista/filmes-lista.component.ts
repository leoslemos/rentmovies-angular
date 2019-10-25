import { Component, OnInit } from '@angular/core';
import { Filmes } from '../filmes';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-filmes-lista',
  templateUrl: './filmes-lista.component.html',
  styleUrls: ['./filmes-lista.component.css']
})
export class FilmesListaComponent implements OnInit {

  filmes: Filmes[];

  constructor(private filmesService: FilmesService ) { };

  ngOnInit() {

    this.filmesService.list().subscribe(response => {
      this.filmes = response;
      console.log(this.filmes);
    })
  }

}
