import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

import { ProtegidaComponent } from './components/protegida/protegida.component';
// Modulo para especificar o definir mis  rutas
const routes: Routes=[
  {path: 'home', component: HomeComponent },
  {path: 'buscar', component: BuscarComponent },
  {path: 'pelicula/:id', component:PeliculaComponent  },
 
  {path:'protegida', component:ProtegidaComponent},
  { path:'**',  redirectTo: '/home'  }
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule // Esto es clave para poder importar  las rutas en  mi app.module
  ]

})
export class AppRoutingModule { }
