import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  cantidadArticulos: number = 0;

  setCantidadArticulos(cantidad: number) {
    this.cantidadArticulos = cantidad;
  }

  constructor() { }
}
