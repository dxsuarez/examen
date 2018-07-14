import { Component, OnInit } from '@angular/core';
import { CarritoService} from '../carrito.service';

@Component({
  selector: 'app-vista-carrito',
  templateUrl: './vista-carrito.component.html',
  styleUrls: ['./vista-carrito.component.css']
})
export class VistaCarritoComponent implements OnInit {

  cantidad: number;

  constructor(
    public carritoService: CarritoService
  ) { }

  ngOnInit() {
  }
}
