import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioInicioComponent } from './components/usuario-inicio/usuario-inicio.component';

const routes: Routes = [
  {path: '', component: UsuarioInicioComponent, children: [
    {path: 'listar', component: ListaUsuariosComponent},
    {path: 'editar', component: EditarUsuarioComponent},
    {path: 'agregar', component: AltaUsuarioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
