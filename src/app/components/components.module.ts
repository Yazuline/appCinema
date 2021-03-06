import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { ProtegidaComponent } from './protegida/protegida.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
       ProtegidaComponent,
    
  ],
   
  exports:[
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    
  ],

   imports: [
    CommonModule,
    RouterModule,
    RatingModule
    
  ]
})
export class ComponentsModule { }
