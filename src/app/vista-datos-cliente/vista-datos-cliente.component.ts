import {Component, Input, OnInit} from '@angular/core';
import {ActoresService} from '../actores.service';
import {Cliente} from '../cliente';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vista-datos-cliente',
  templateUrl: './vista-datos-cliente.component.html',
  styleUrls: ['./vista-datos-cliente.component.css']
})
export class VistaDatosClienteComponent implements OnInit {
  @Input() cliente: Cliente;
  @Input() tipoInformacionCod: number;
  titulo: string
  nombre: string;
  apellido: string;
  correo: string;
  direccion: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private actoresService: ActoresService,

  ) { }

  ngOnInit() {
    if(this.tipoInformacionCod === 1) {
      this.titulo = 'Datos de cuenta';
      this.nombre = this.cliente.nombre;
      this.apellido = this.cliente.apellido;
      this.correo = this.cliente.correo;
      this.direccion = this.cliente.direccion;
    } else {
      this.titulo = 'Datos de facturación';
      this.nombre = this.cliente.facturacion.nombre;
      this.apellido = this.cliente.facturacion.apellido;
      this.correo = this.cliente.facturacion.correo;
      this.direccion = this.cliente.facturacion.direccion;
    }
  }
}
