import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActoresComponent } from './actores/actores.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import {DetalleActorComponent} from './detalle-actor/detalle-actor.component';
import {DetallePeliculaComponent} from './detalle-pelicula/detalle-pelicula.component';
import { CarritoComponent } from './carrito/carrito.component';

export const RUTAS_APP: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'actores/:id',
    component: ActoresComponent
  },
  {
    path: 'actor/:id',
    component: DetalleActorComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'pelicula/:id',
    component: DetallePeliculaComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  }
];
