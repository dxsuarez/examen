import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actor } from './actor';
import { Cliente } from './cliente';
import { ACTORES } from './mock-actores';
import { CLIENTES } from './mock-clientes';
import { CarritoService } from './carrito.service';
import {Pelicula} from './pelicula';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(
    private actoresService: ActoresService,
    private carritoService: CarritoService
  ) { }

  getActores(): Observable<Actor[]> {
    return of(ACTORES);
  }

  getPeliculas(actorId: number): Observable<Pelicula[]> {
    let actores: Actor[] = [];
    if (actorId == 0) {
      actores = ACTORES;
    } else {
      const actor: Actor = this.getActor(actorId);
      actores.push(actor);
    }
    const peliculas: Pelicula[] = [];
    for (const actor of actores) {
      for (const pelicula of actor.peliculas) {
        peliculas.push(pelicula);
      }
    }
    return of(peliculas);
  }

  getActor(id: number): Actor {
    let actor: Actor = null;
    const actores: Actor[] = ACTORES.filter(acc => acc.actorId == id);
    if (actores != null) {
      actor = actores[0];
    }
    return actor;
  }

  getCliente(id: number): Observable<Cliente> {
    let cliente: Cliente = null;
    const clientes: Cliente[] = CLIENTES.filter(p => p.clienteId == id);
    if (clientes != null) {
      cliente = clientes[0];
    }
    return of(cliente);
  }

  getPeliculaObservable(id: number): Observable<Pelicula> {
    let peliculas = this.getPeliculasLocal(0);
    peliculas = peliculas.filter(p => p.peliculaId == id);
    let pelicula: Pelicula = null;
    if (peliculas != null) {
      pelicula = peliculas[0];
    }
    return of(pelicula);
  }

  getPelicula(id: number): Pelicula {
    let peliculas = this.getPeliculasLocal(0);
    peliculas = peliculas.filter(p => p.peliculaId == id);
    let pelicula: Pelicula = null;
    if (peliculas != null) {
      pelicula = peliculas[0];
    }
    return pelicula;
  }

  getCantidadArticulos(): number {
    const peliculas = this.getPeliculasPorDisponibilidad(false);
    return peliculas.length;
  }

  getPeliculasPorDisponibilidad(disponible: boolean): Pelicula[] {
    let peliculas = this.getPeliculasLocal(0);
    peliculas = peliculas.filter(p => p.disponible == disponible);
    return peliculas;
  }

  setDisponiblidadPelicula(id: number, disponible: boolean) {
    const pelicula = this.getPelicula(id);
    if (pelicula != null) {
      pelicula.disponible = disponible;
      const cantidadArticulos = this.getCantidadArticulos();
      this.carritoService.setCantidadArticulos(cantidadArticulos);
    }
  }

  getPeliculasLocal(actorId: number): Pelicula[] {
    let actores: Actor[] = [];
    if (actorId == 0) {
      actores = ACTORES;
    } else {
      const actor: Actor = this.getActor(actorId);
      actores.push(actor);
    }
    const peliculas: Pelicula[] = [];
    for (const actor of actores) {
      for (const pelicula of actor.peliculas) {
        peliculas.push(pelicula);
      }
    }
    return peliculas;
  }
}





