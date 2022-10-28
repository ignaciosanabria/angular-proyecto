import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    PaginaNoEncontradaComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
