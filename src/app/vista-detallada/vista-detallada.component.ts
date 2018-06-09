import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css']
})
export class VistaDetalladaComponent implements OnInit {

  @Input() actorId: number;
  @Input() nombres: string;
  @Input() apellidos: string;
  @Input() fechaNacimiento: string;
  @Input() numeroPeliculas: number;
  @Input() retirado: boolean;

  constructor() { }

  ngOnInit() {
  }

}
