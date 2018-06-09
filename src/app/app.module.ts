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

import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaDetalladaComponent } from './vista-detallada/vista-detallada.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { TablaDetalleComponent } from './tabla-detalle/tabla-detalle.component';
import { FormularioActorComponent } from './formulario-actor/formulario-actor.component';
import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    FormularioComponent,
    VistaDetalladaComponent,
    VistaPreviaComponent,
    TablaDetalleComponent,
    FormularioActorComponent,
    FormularioPeliculaComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
