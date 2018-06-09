import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})

export class FormularioPeliculaComponent implements OnInit {

  @Input() peliculaId: number;
  @Input() nombre: string;
  @Input() anioLanzamiento: number;
  @Input() rating: number;
  @Input() actoresPrincipales: string;
  @Input() sinopsis: string;
  @Input() actorId: number;

  @Output() dioClickEnBotonCrear: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  hizoClickEnBotonLimpiar() {
    this.peliculaId = 0;
    this.nombre = '';
    this.anioLanzamiento = 0;
    this.rating = 0;
    this.actoresPrincipales = '';
    this.sinopsis = '';
  }

  hizoClickEnBotonCrear() {
    const pelicula = {
      peliculaId: this.peliculaId,
      nombre: this.nombre,
      anioLanzamiento: this.anioLanzamiento,
      rating: this.rating,
      actoresPrincipales: this.actoresPrincipales,
      sinopsis: this.sinopsis,
      actorId: this.actorId,
    };
    this.dioClickEnBotonCrear.emit(pelicula);
  }
}
