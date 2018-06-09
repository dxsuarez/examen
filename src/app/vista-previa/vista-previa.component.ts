import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.css']
})
export class VistaPreviaComponent implements OnInit {

  @Input() indice: number;
  @Input() nombre: string;
  @Input() descripcion: string;
  @Input() imagen: string;

  @Output() dioClickEnEstado: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  hizoClickEnEstado(indice) {
    this.dioClickEnEstado.emit(indice);
  }

}
