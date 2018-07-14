import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActoresService } from '../actores.service';
import { Actor } from '../actor';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {

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
