import {Component, Input, OnInit} from '@angular/core';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-vista-detalle-pelicula',
  templateUrl: './vista-detalle-pelicula.component.html',
  styleUrls: ['./vista-detalle-pelicula.component.css']
})
export class VistaDetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;

  constructor() { }

  ngOnInit() {
  }
}
