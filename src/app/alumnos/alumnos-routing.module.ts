import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { FormularioAltaAlumnoComponent } from './components/formulario-alta-alumno/formulario-alta-alumno.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnoInicioComponent, children: [
    { path: 'listar', component: StudentComponent },
    { path: 'editar', component: EditarAlumnoComponent },
    { path: 'agregar', component: FormularioAltaAlumnoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
