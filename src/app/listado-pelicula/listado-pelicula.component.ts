import {Component, Input, OnInit} from '@angular/core';
import {ActoresService} from '../actores.service';
import {ActivatedRoute} from '@angular/router';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

  @Input() actorId: number;
  peliculas: Pelicula[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private actoresService: ActoresService
  ) {
  }

  getPeliculas(actorId: number): void {
    this.actoresService.getPeliculas(actorId)
      .subscribe(peliculas => this.peliculas = peliculas);
  }

  ngOnInit() {
    this.getPeliculas(this.actorId);
    const observableParametros$ = this
      ._activatedRoute
      .params;

    observableParametros$
      .subscribe(
        (respuestaOk) => {
          console.log('Ok', respuestaOk);
        },
        (respuestaError) => {
          console.log('Error', respuestaError);
        },
        () => { // respuestaCompletado
          console.log('Completado');
        }
      );
    console.log('fin');
  }
}
