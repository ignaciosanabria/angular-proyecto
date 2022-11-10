import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AltaCursoComponent } from './alta-curso.component';

describe('AltaCursoComponent', () => {
  let component: AltaCursoComponent;
  let fixture: ComponentFixture<AltaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCursoComponent ],
      imports:[ReactiveFormsModule, HttpClientModule, MatSlideToggleModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
