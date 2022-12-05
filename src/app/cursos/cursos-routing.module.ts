import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCursoComponent } from './components/alta-curso/alta-curso.component';
import { CursoInicioComponent } from './components/curso-inicio/curso-inicio.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { VistaCursoComponent } from './components/vista-curso/vista-curso.component';


const routes: Routes = [
  { path: '', component: CursoInicioComponent, children: [
    { path: 'alta', component: AltaCursoComponent},
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar', component: EditarCursoComponent },
    { path: 'agregar', component: AltaCursoComponent },
    { path: 'ver', component: VistaCursoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
