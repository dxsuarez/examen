import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() actorId: number;
  @Input() nombres: string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroPeliculas: number;
  @Input() retirado: boolean;

  @Output() dioClickEnBotonCrear: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hizoClickEnBotonLimpiar() {
    this.actorId = 0;
    this.nombres = '';
    this.apellidos = '';
    this.fechaNacimiento = '';
    this.numeroPeliculas = 0;
    this.retirado = false;
  }

  hizoClickEnBotonCrear() {
    const actor = {
      actorId: this.actorId,
      nombres: this.nombres,
      apellidos: this.apellidos,
      fechaNacimiento: this.fechaNacimiento,
      numeroPeliculas: this.numeroPeliculas,
      retirado: this.retirado
    };
    this.dioClickEnBotonCrear.emit(actor);
  }
}
