import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../pelicula';
import {Cliente} from '../cliente';
import {Facturacion} from '../facturacion';
import {ActoresService} from '../actores.service';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  peliculas: Pelicula[];
  cliente: Cliente;
  facturacion: Facturacion;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private actoresService: ActoresService,
    private modalService: NgbModal
  ) {
  }

  getCliente(id: number): void {
    this.actoresService.getCliente(id)
      .subscribe(cliente => this.cliente = cliente);
  }

  ngOnInit() {
    this.peliculas = this.actoresService.getPeliculasPorDisponibilidad(false);
    this.getCliente(1);
    this.facturacion = Object.assign({}, this.cliente.facturacion);
  }

  eliminar(id) {
    this.actoresService.setDisponiblidadPelicula(id, true);
    this.peliculas = this.actoresService.getPeliculasPorDisponibilidad(false);
  }

  open(content) {
    //this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.modalService.open(content, {}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
      this.guardar();
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  guardar() {
    const facturacion = this.cliente.facturacion;
    facturacion.nombre = this.facturacion.nombre;
    facturacion.apellido = this.facturacion.apellido;
    facturacion.correo = this.facturacion.correo;
    facturacion.direccion = this.facturacion.direccion;
  }
}
