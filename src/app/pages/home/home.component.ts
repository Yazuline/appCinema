import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public movies: Movie[] =[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    this.peliculasService.getCartelera()
    .subscribe(resp => { //Aqui hago la petición http
     // console.log(resp.results);
      this.movies= resp.results; //  objeto que tiene las peliculas 
    })


  }
   
  getCartelera(){
    
  }
}
