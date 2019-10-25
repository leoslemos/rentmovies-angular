import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filmes } from './filmes';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) { };

  list(){
    return this.http.get<Filmes[]>(this.API);
  }

  getById(id){
      return this.http.get<Filmes[]>(`${this.API}/${id}`);
  }
}
