import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule, MatSlideToggleModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const usuario = app.formulario.controls['usuario'];
    usuario.setValue('Abner@gmail.com');

    expect(app.formulario.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let usuario = app.formulario.controls['usuario'];
    let contrasena = app.formulario.controls['contrasena'];

    usuario.setValue('Abner@gmail.com');
    contrasena.setValue('123456');


    expect(app.formulario.invalid).toBeFalse(); 
  });

});
