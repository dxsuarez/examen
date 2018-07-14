import { Pelicula } from './pelicula';

export class Actor {
  actorId: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroPeliculas: number;
  retirado: boolean;
  peliculas: Pelicula[];
}


