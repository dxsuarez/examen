import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from '../app.component';

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css']
})

export class TablaDetalleComponent implements OnInit {

  @Input() peliculas: Pelicula[];

  @Output() dioClickEnFila: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hizoClickEnFila(peliculaId) {
    this.dioClickEnFila.emit(peliculaId);
  }
}
