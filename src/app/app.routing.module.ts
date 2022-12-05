import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const rutas: Routes = [
    { path: 'inicio', component: InicioComponent, canActivate:[AutenticacionGuard] },
    { path: 'cursos', loadChildren: () =>import('./cursos/cursos.module').then((m)=> m.CursosModule), canActivate:[AutenticacionGuard]},
    { path: 'alumnos', loadChildren: ()=>import('./alumnos/alumnos.module').then((m)=>m.AlumnosModule), canActivate:[AutenticacionGuard]},
    { path: 'autenticacion', loadChildren: ()=>import('./autenticacion/autenticacion.module').then((m)=>m.AutenticacionModule)},
    { path: 'usuarios', loadChildren: ()=>import('./usuarios/usuarios.module').then((m)=>m.UsuariosModule), canActivate:[AutenticacionGuard, AdminGuard]},
    { path: 'inscripciones', loadChildren: ()=>import('./inscripciones/inscripciones.module').then((m)=>m.InscripcionesModule), canActivate:[AutenticacionGuard]},
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: '**', component: PaginaNoEncontradaComponent },

]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}