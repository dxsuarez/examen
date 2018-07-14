import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActoresService} from '../actores.service';
import {ActivatedRoute} from '@angular/router';
import {Actor} from '../actor';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  pelicula: Pelicula;
  actor: Actor;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private actoresService: ActoresService,
    private _router: Router
  ) { }

  getPeliculaObservable(id:number) {
    this.actoresService.getPeliculaObservable(id)
      .subscribe(pelicula => this.pelicula = pelicula);
  }

  ngOnInit() {
    const observableParametros$ = this
      ._activatedRoute
      .params;

    observableParametros$
      .subscribe(
        (respuestaOk) => {
          const id: number = respuestaOk.id;
          this.getPeliculaObservable(id);
          const actorId: number = this.pelicula.actorId;
          this.actor = this.actoresService.getActor(actorId);
          console.log('Ok', respuestaOk);
        },
        (respuestaError) => {
          console.log('Error', respuestaError);
        },
        () => { // respuestaCompletado
          console.log('Completado');
        }
      );
  }

  anadirAlCarrito(id) {
    this.actoresService.setDisponiblidadPelicula(id, false);
    //this.pelicula.disponible = false;
    const url = ['/carrito'];
    this._router.navigate(url);
  }
}
