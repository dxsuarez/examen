import { Component, OnInit } from '@angular/core';
import {ActoresService} from '../actores.service';
import {ActivatedRoute} from '@angular/router';
import {Actor} from '../actor';

@Component({
  selector: 'app-listado-actor',
  templateUrl: './listado-actor.component.html',
  styleUrls: ['./listado-actor.component.css']
})
export class ListadoActorComponent implements OnInit {

  actores: Actor[];
  actorId = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private actoresService: ActoresService
  ) {
  }

  getActores(): void {
    this.actoresService.getActores()
      .subscribe(actores => this.actores = actores);
  }

  ngOnInit() {
    this.getActores();
    console.log('principio');
    const observableParametros$ = this
      ._activatedRoute
      .params;

    observableParametros$
      .subscribe(
        (respuestaOk) => {
          this.actorId = respuestaOk.id;
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
