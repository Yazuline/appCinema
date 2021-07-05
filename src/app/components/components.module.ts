import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { AuthComponent } from './auth/auth.component';
import { ProtegidaComponent } from './protegida/protegida.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    AuthComponent,
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
