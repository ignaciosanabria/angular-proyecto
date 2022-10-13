import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentComponent } from './components/student/student.component';
import { FormularioComponent} from './components/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { CabeceraLetraDirective } from './directives/cabecera-letra.directive';
import { FormularioAltaAlumnoComponent } from './components/formulario-alta-alumno/formulario-alta-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    FormularioComponent,
    NombreApellidoPipe,
    CabeceraLetraDirective,
    FormularioAltaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
