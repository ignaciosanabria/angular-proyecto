import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioAltaAlumnoComponent } from './formulario-alta-alumno.component';

describe('FormularioAltaAlumnoComponent', () => {
  let component: FormularioAltaAlumnoComponent;
  let fixture: ComponentFixture<FormularioAltaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAltaAlumnoComponent ],
      imports:[ReactiveFormsModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAltaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
