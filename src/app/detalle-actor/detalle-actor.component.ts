import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../actor';
import {ActoresService} from '../actores.service';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  actor: Actor;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private actoresService: ActoresService
  ) { }

  ngOnInit() {
    const observableParametros$ = this
      ._activatedRoute
      .params;

    observableParametros$
      .subscribe(
        (respuestaOk) => {
          const id: number = respuestaOk.id;
          this.actor = this.actoresService.getActor(id);
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
}
