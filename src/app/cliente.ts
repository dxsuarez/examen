import {Facturacion} from './facturacion';

export class Cliente {
  clienteId: number;
  nombre: string;
  apellido: string;
  correo: string;
  direccion: string;
  facturacion: Facturacion;
}
