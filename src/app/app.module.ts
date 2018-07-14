import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ActoresComponent } from './actores/actores.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { HomeComponent } from './home/home.component';

import {RouterModule} from '@angular/router';
import {RUTAS_APP} from './app.routes';
import { VistaActorComponent } from './vista-actor/vista-actor.component';
import { ListadoActorComponent } from './listado-actor/listado-actor.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { VistaPeliculaComponent } from './vista-pelicula/vista-pelicula.component';
import { ListadoPeliculaComponent } from './listado-pelicula/listado-pelicula.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { VistaDetallePeliculaComponent } from './vista-detalle-pelicula/vista-detalle-pelicula.component';
import { CarritoComponent } from './carrito/carrito.component';
import { VistaCarritoComponent } from './vista-carrito/vista-carrito.component';
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';
import { VistaDatosClienteComponent } from './vista-datos-cliente/vista-datos-cliente.component';
import { VistaDatosFacturacionComponent } from './vista-datos-facturacion/vista-datos-facturacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ActoresComponent,
    PeliculasComponent,
    HomeComponent,
    VistaActorComponent,
    ListadoActorComponent,
    DetalleActorComponent,
    VistaPeliculaComponent,
    ListadoPeliculaComponent,
    DetallePeliculaComponent,
    VistaDetallePeliculaComponent,
    CarritoComponent,
    VistaCarritoComponent,
    VistaClienteComponent,
    VistaDatosClienteComponent,
    VistaDatosFacturacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    TableModule,
    InputTextModule,
    CardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
