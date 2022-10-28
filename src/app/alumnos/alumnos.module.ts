import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { StudentComponent } from './components/student/student.component';
import { FormularioAltaAlumnoComponent } from './components/formulario-alta-alumno/formulario-alta-alumno.component';
import { SharedModule } from '../shared/shared.module';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { CabeceraLetraDirective } from './directives/cabecera-letra.directive';


@NgModule({
  declarations: [
    AlumnoInicioComponent,
    StudentComponent,
    FormularioAltaAlumnoComponent,
    NombreApellidoPipe,
    EditarAlumnoComponent,
    CabeceraLetraDirective
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ]
})
export class AlumnosModule { }
