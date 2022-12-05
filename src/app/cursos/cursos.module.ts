import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AltaCursoComponent } from './components/alta-curso/alta-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { CursoInicioComponent } from './components/curso-inicio/curso-inicio.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { VistaCursoComponent } from './components/vista-curso/vista-curso.component';


@NgModule({
  declarations: [
    ListaCursosComponent,
    AltaCursoComponent,
    EditarCursoComponent,
    CursoInicioComponent,
    VistaCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
