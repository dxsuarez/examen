import { Cliente } from './cliente';

export const CLIENTES: Cliente[] = [
  {
    clienteId: 1,
    nombre: 'nombres-1',
    apellido: 'apellidos-1',
    correo: 'email-1',
    direccion: 'direccion-1',
    facturacion: {
      clienteId: 1,
      nombre: 'facturacion-nombre-1',
      apellido: 'facturacion-apellido-1',
      correo: 'facturacion-apellido-1',
      direccion: 'facturacion-direccion-1'
    }
  },
  {
    clienteId: 2,
    nombre: 'nombres-2',
    apellido: 'apellidos-2',
    correo: 'email-2',
    direccion: 'direccion-2',
    facturacion: {
      clienteId: 2,
      nombre: 'facturacion-nombre-2',
      apellido: 'facturacion-apellido-2',
      correo: 'facturacion-apellido-2',
      direccion: 'facturacion-direccion-2'
    }
  }
  ];
