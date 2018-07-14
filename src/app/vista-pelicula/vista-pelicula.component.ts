import {Component, Input, OnInit} from '@angular/core';
import {Pelicula} from '../pelicula';

@Component({
  selector: 'app-vista-pelicula',
  templateUrl: './vista-pelicula.component.html',
  styleUrls: ['./vista-pelicula.component.css']
})
export class VistaPeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;

  constructor() { }

  ngOnInit() {
  }

}
