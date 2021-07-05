import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() movies: Movie[]= [];
  constructor(private ActivatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
     const {id}= this.ActivatedRoute.snapshot.params.id; //  Devuelve el Id como se encuentra actualmente
     console.log(id);

  }

}
