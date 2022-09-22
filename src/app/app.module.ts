import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
