import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioInicioComponent } from './components/usuario-inicio/usuario-inicio.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsuarioInicioComponent,
    ListaUsuariosComponent,
    AltaUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
