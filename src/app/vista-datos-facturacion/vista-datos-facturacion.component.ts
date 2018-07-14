import { Component, OnInit } from '@angular/core';
import {ActoresService} from '../actores.service';
import {Facturacion} from '../facturacion';

@Component({
  selector: 'app-vista-datos-facturacion',
  templateUrl: './vista-datos-facturacion.component.html',
  styleUrls: ['./vista-datos-facturacion.component.css']
})
export class VistaDatosFacturacionComponent implements OnInit {
  facturacion: Facturacion;

  constructor(
    private actoresService: ActoresService,
  ) { }

  getCliente(id: number): void {
    this.actoresService.getCliente(id)
      .subscribe(cliente => this.facturacion = cliente.facturacion);
  }

  ngOnInit() {
    this.getCliente(1);
  }
}
