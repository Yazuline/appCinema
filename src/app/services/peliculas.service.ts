import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  getPeliculaDetalle(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  // Metodo para hacer la petición y que se retorne la informacion de la api
  getCartelera():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=52b60bc2dd00357e8963b4538ccdbd1e&language=es-ES&page=1');
  }
  
}
