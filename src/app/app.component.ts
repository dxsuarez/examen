import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  actores = [
    {
      actorId: 1,
      nombres: 'Al',
      apellidos: 'Pacino',
      fechaNacimiento: '1960-01-01',
      numeroPeliculas: 100,
      retirado: false,
      peliculas: [
        {
          peliculaId: 11,
          nombre: 'Pelicula 11',
          anioLanzamiento: 2000,
          rating: 5,
          actoresPrincipales: 'Actor1, Actor 2',
          sinopsis: 'Esta es una película',
          actorId: 1,
        },
        {
          peliculaId: 12,
          nombre: 'Pelicula 12',
          anioLanzamiento: 2000,
          rating: 5,
          actoresPrincipales: 'Actor1, Actor 2',
          sinopsis: 'Esta es una película',
          actorId: 1,
        }
        ]
    },
    {
      actorId: 2,
      nombres: 'Robert',
      apellidos: 'Deniro',
      fechaNacimiento: '1961-01-01',
      numeroPeliculas: 90,
      retirado: false,
      peliculas: [
        {
          peliculaId: 21,
          nombre: 'Pelicula 21',
          anioLanzamiento: 2000,
          rating: 5,
          actoresPrincipales: 'Actor1, Actor 2',
          sinopsis: 'Esta es una película',
          actorId: 2,
        },
        {
          peliculaId: 22,
          nombre: 'Pelicula 22',
          anioLanzamiento: 2000,
          rating: 5,
          actoresPrincipales: 'Actor1, Actor 2',
          sinopsis: 'Esta es una película',
          actorId: 2,
        }
      ]
    },
    {
      actorId: 3,
      nombres: 'Marlon',
      apellidos: 'Brando',
      fechaNacimiento: '1950-01-01',
      numeroPeliculas: 200,
      retirado: true
    },
    {
      actorId: 4,
      nombres: 'María',
      apellidos: 'Felix',
      fechaNacimiento: '1940-01-01',
      numeroPeliculas: 100,
      retirado: true
    }
  ];
  actor = this.actores[0];
  pelicula = this.actor.peliculas[0];

  getActor() {
    return this.actor;
  }

  alertar(indice) {
    this.actor = this.actores[indice];
  }

  alertarDioClickEnBotonCrear(actor) {
    this.actores.push(actor);
  }

  alertarPeliculaDioClickEnBotonCrear(pelicula) {
    this.actor.peliculas.push(pelicula);
  }

  alertarPeliculaDioClickEnFila(peliculaId) {
    const peliculas = this.actor.peliculas.filter(person => person.peliculaId === peliculaId);

    if(peliculas == null)
      return;

    this.pelicula = peliculas[0];
  }
}


export interface Actor {
  actorId: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroPeliculas: number;
  retirado: boolean;
  peliculas: Pelicula[];
}

/*
export interface Actor {
  actorId;
  nombres;
  apellidos;
  fechaNacimiento;
  numeroPeliculas;
  retirado;
  peliculas;
}
*/

export interface Pelicula {
  peliculaId;
  nombre;
  anioLanzamiento;
  rating;
  actoresPrincipales;
  sinopsis;
  actorId;
}
