import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { EditarInscripcionComponent } from './components/editar-inscripcion/editar-inscripcion.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    EditarInscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule
  ]
})
export class InscripcionesModule { }
